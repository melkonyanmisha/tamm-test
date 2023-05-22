import ApiError from '../api-error.exception.js';
import PostModel from '../../models/post.model.js';
import CreatePostDto from './dto/create-post.dto.js';

class PostService {
    /**
     *
     * @param userId
     * @param title
     * @param text
     * @returns {Promise<CreatePostDto>}
     */
    async createPost({userId, title, text}) {
        const post = await PostModel.create({userId, title, text});

        return new CreatePostDto(post);
    }

    /**
     *
     * @param userId
     * @param postId
     * @param title
     * @param text
     * @returns {Promise<CreatePostDto>}
     */
    async updatePost({userId, postId, title, text}) {
        const post = await PostModel.findOneAndUpdate({_id: postId, userId}, {title, text});
        if (!post) throw ApiError.NotFound('Post not found');

        return new CreatePostDto(post);
    }

    /**
     *
     * @param userId
     * @param postId
     * @returns {Promise<CreatePostDto>}
     */
    async getPost({userId, postId}) {
        const post = await PostModel.findOne({_id: postId, userId});
        if (!post) throw ApiError.NotFound('Post not found');

        return new CreatePostDto(post);
    }

    /**
     *
     * @param userId
     * @param limit
     * @param page
     * @returns {Promise<*>}
     */
    async getAllPosts({userId, limit = 10, page = 1}) {
        const skip = (page - 1) * limit;
        const posts = await PostModel.find({userId}).skip(skip).limit(limit).sort({updatedAt: -1});

        return posts.map(post => new CreatePostDto(post));
    }

    /**
     *
     * @param userId
     * @param postId
     * @returns {Promise<void>}
     */
    async deletePost({userId, postId}) {
        const post = await PostModel.findOneAndDelete({_id: postId, userId});
        if (!post) throw ApiError.NotFound('Post not found');
    }
}

export default new PostService;

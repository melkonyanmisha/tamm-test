import send from '../api.response.js';
import postService from './post.service.js';

class PostController {
  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async createPost(req, res) {
    const { id: userId } = req.user;
    const { title, text } = req.body;
    const post = await postService.createPost({ userId, title, text });

    send(res, 201, post);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async updatePost(req, res) {
    const { id: userId } = req.user;
    const { postId } = req.params;
    const { title, text } = req.body;
    const post = await postService.updatePost({ userId, postId, title, text });

    send(res, 200, post);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async getPost(req, res) {
    const { id: userId } = req.user;
    const { postId } = req.params;
    const post = await postService.getPost({ userId, postId });

    send(res, 200, post);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async getAllPosts(req, res) {
    const { id: userId } = req.user;
    const { limit, page } = req.query;
    const posts = await postService.getAllPosts({ userId, limit, page });

    send(res, 200, posts);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async deletePost(req, res) {
    const { id: userId } = req.user;
    const { postId } = req.params;
    await postService.deletePost({ userId, postId });

    send(res, 204);
  }
}

export default new PostController;

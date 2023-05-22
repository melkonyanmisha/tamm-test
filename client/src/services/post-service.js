import $api from '../http';

export default class PostService {
    static createPost(data) {
        return $api.post(`/posts`, data);
    }

    static getPosts() {
        return $api.get(`/posts`);
    }

    static getPost({postId}) {
        return $api.get(`/posts/${postId}`);
    }

    static updatePost({postId, data}) {
        return $api.put(`/posts/${postId}`, data);
    }

    static deletePost({postId}) {
        return $api.delete(`/posts/${postId}`);
    }
}

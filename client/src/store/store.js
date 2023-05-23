import {makeAutoObservable} from 'mobx';
import AuthService from '../services/auth-service';
import PostService from "../services/post-service";

export default class Store {
    user = {};
    post = {};
    posts = [];
    isAuth = false;
    error = '';

    constructor() {
        makeAutoObservable(this);
    }

    /**
     *
     * @param bool
     */
    setAuth(bool) {
        this.isAuth = bool;
    }

    setError(error) {
        this.error = error;
    }

    setUser(user) {
        this.user = user;
    }

    /**
     *
     * @param post
     */
    setPost(post) {
        this.post = post;
    }

    /**
     *
     * @param posts
     */
    setPosts(posts) {
        this.posts = posts;
    }

    /**
     *
     * @param email
     * @param password
     * @returns {Promise<void>}
     */
    async login({email, password}) {
        try {
            const response = await AuthService.login({email, password});
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            this.setError(e.response?.data?.message);
        }
    }

    /**
     *
     * @param firstName
     * @param lastName
     * @param email
     * @param password
     * @returns {Promise<void>}
     */
    async registration({firstName, lastName, email, password}) {
        try {
            const response = await AuthService.registration({firstName, lastName, email, password});
            this.setUser(response.data.user);
        } catch (e) {
            this.setError(e.response?.data?.message);
        }
    }

    /**
     *
     * @returns {Promise<void>}
     */
    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            this.setError(e.response?.data?.message);
        }
    }

    /**
     *
     * @param title
     * @param text
     * @returns {Promise<void>}
     */
    async createPost({title, text}) {
        try {
            await PostService.createPost({title, text});
            const response = (await PostService.getPosts()).data;
            this.setPosts(response.data);
        } catch (e) {
            this.setError(e.response?.data?.message);
        }
    }

    /**
     *
     * @returns {Promise<void>}
     */
    async getPosts() {
        try {
            const response = (await PostService.getPosts()).data;
            this.setPosts(response.data);

        } catch (e) {
            this.setError(e.response?.data?.message);
        }
    }

    /**
     *
     * @param postId
     * @returns {Promise<void>}
     */
    async getPost({postId}) {
        try {
            const response = (await PostService.getPost({postId})).data;
            this.setPost(response.data);
        } catch (e) {
            this.setError(e.response?.data?.message);
        }
    }

    /**
     *
     * @param postId
     * @param data
     * @returns {Promise<void>}
     */
    async updatePost({postId, data}) {
        try {
            const response = (await PostService.updatePost({postId, data})).data;
            this.setPost(response.data);
        } catch (e) {
            this.setError(e.response?.data?.message);
        }
    }

    /**
     *
     * @param postId
     * @returns {Promise<void>}
     */
    async deletePost({postId}) {
        try {
            await PostService.deletePost({postId});
        } catch (e) {
            this.setError(e.response?.data?.message);
        }
    }
}

import $api from '../http';

export default class AuthService {
    static async login({email, password}) {
        return (await ($api.post('/auth/login', {email, password}))).data;
    }

    static async registration({firstName, lastName, email, password}) {
        return (await ($api.post('/auth/registration', {firstName, lastName, email, password}))).data;
    }

    static async logout() {
        return (await $api.post('/auth/logout')).data;
    }
}

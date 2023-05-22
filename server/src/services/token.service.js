import jwt from 'jsonwebtoken';
import config from '../config.js';
import tokenModel from '../models/token.model.js';
import {token} from "morgan";

class TokenService {

    /**
     *
     * @param payload
     * @returns {{accessToken: (*), refreshToken: (*)}}
     */
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, config.JWT_ACCESS_SECRET, {expiresIn: '10m'}, false);
        const refreshToken = jwt.sign(payload, config.JWT_REFRESH_SECRET, {expiresIn: '30d'}, false);

        return {
            accessToken,
            refreshToken
        };
    }

    /**
     *
     * @param token
     * @returns {null|*}
     */
    validateAccessToken(token) {
        try {
            return jwt.verify(token, config.JWT_ACCESS_SECRET, {}, false);
        } catch (e) {
            return null;
        }
    }

    /**
     *
     * @param token
     * @returns {null|*}
     */
    validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET, {}, false);
        } catch (e) {
            return null;
        }
    }

    /**
     *
     * @param userId
     * @param refreshToken
     * @returns {Promise}
     */
    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId});

        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return await tokenData.save();
        }

        return await tokenModel.create({user: userId, refreshToken});
    }

    /**
     *
     * @param refreshToken
     */
    removeToken(refreshToken) {
        tokenModel.deleteOne({refreshToken});
    }

    /**
     *
     * @param refreshToken
     * @returns QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOne'>
     */
    findToken(refreshToken) {
        return tokenModel.findOne({refreshToken});
    }
}

export default new TokenService();

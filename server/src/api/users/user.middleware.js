import ApiError from '../api-error.exception.js';
import tokenService from '../../services/token.service.js';

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const userMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return next(ApiError.Unauthorized());

    const accessToken = authorization.split(' ')[1];
    if (!accessToken) return next(ApiError.Unauthorized());

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) return next(ApiError.Unauthorized());

    if(!userData.isVerified) return next(ApiError.Forbidden())

    req.user = userData;
    next();
  } catch (e) {
    return next(ApiError.Unauthorized());
  }
}

export default userMiddleware;

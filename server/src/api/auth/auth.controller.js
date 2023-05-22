import config from '../../config.js';
import send from '../api.response.js';
import authService from './auth.service.js';

class AuthController {

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async registration(req, res) {
    const { firstName, lastName, email, password } = req.body;
    const userData = await authService.registration({ firstName, lastName, email, password });

    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    send(res, 201, userData);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async login(req, res) {
    const { email, password } = req.body;

    const userData = await authService.login({ email, password });

    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    send(res, 200, userData);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async logout(req, res) {
    const { refreshToken } = req.cookies;
    await authService.logout({ refreshToken });

    res.clearCookie('refreshToken');

    send(res, 200);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async verify(req, res) {
    const { activationCode } = req.params;
    await authService.verify({ activationCode });

    res.redirect(config.CLIENT_URL);
  }

  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async refresh(req, res) {
    const { refreshToken } = req.cookies;
    const userData = await authService.refresh({ refreshToken });

    res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true });

    send(res, 200, userData);
  }
}

export default new AuthController();

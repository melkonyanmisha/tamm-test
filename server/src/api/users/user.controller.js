import send from '../api.response.js';
import userService from './user.service.js';

class AuthController {
  /**
   *
   * @param req
   * @param res
   * @returns {Promise<void>}
   */
  async getOne(req, res) {
    const { userId } = req.params;

    const userData = await userService.getOne({ userId });

    send(res, 200, userData);
  }
}

export default new AuthController();

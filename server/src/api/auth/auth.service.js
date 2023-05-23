import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import config from '../../config.js';
import ApiError from '../api-error.exception.js';
import UserModel from '../../models/user.model.js';
import mailService from '../../services/mail.service.js';
import tokenService from '../../services/token.service.js';
import CreateUserDto from '../users/dto/create-user.dto.js';

class AuthService {
  /**
   *
   * @param firstName
   * @param lastName
   * @param email
   * @param password
   * @returns {Promise<*&{user: CreateUserDto}>}
   */
  async registration({ firstName, lastName, email, password }) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`User with email address ${ email } already exists`);
    }

    const hashPassword = await bcrypt.hash(password, 3);
    const activationCode = crypto.randomBytes(6).toString('hex');

    const user = await UserModel.create({ firstName, lastName, email, password: hashPassword, activationCode });
    await mailService.sendActivationMail(email, `${ config.APP_URL }/api/v1/auth/verify/${ activationCode }`);

    const userDto = new CreateUserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  /**
   *
   * @param email
   * @param password
   * @returns {Promise<*&{user: CreateUserDto}>}
   */
  async login({ email, password }) {
    const user = await UserModel.findOne({ email });

    if (!user) throw ApiError.BadRequest('User with this email was not found');

    if (!user.isVerified) throw ApiError.Forbidden();

    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) throw ApiError.BadRequest('Incorrect password');

    const userDto = new CreateUserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  /**
   *
   * @param refreshToken
   * @returns {Promise<void>}
   */
  async logout({ refreshToken }) {
    tokenService.removeToken(refreshToken);
  }

  /**
   *
   * @param activationCode
   * @returns {Promise<void>}
   */
  async verify({ activationCode }) {
    const user = await UserModel.findOne({ activationCode });
    if (!user) throw ApiError.BadRequest('Incorrect activation link');

    user.isVerified = true;
    user.activationCode = undefined;
    await user.save();
  }

  /**
   *
   * @param refreshToken
   * @returns {Promise<*&{user: CreateUserDto}>}
   */
  async refresh({ refreshToken }) {
    if (!refreshToken) {
      throw ApiError.Unauthorized();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.Unauthorized();
    }

    const user = await UserModel.findById(userData.id);
    const userDto = new CreateUserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

export default new AuthService();

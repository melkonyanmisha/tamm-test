import ApiError from '../api-error.exception.js';
import UserModel from '../../models/user.model.js';
import CreateUserDto from '../users/dto/create-user.dto.js';

class AuthService {
  /**
   *
   * @param userId
   * @returns {Promise<CreateUserDto>}
   */
  async getOne({ userId }) {
    const user = await UserModel.findById(userId);
    if (!user) throw ApiError.NotFound(`User not found`);

    return new CreateUserDto(user);
  }
}

export default new AuthService();

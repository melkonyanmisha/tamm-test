export default class ApiError extends Error {
  status;
  errors;

  /**
   *
   * @param status
   * @param message
   * @param errors
   */
  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  /**
   *
   * @returns {ApiError}
   * @constructor
   */
  static Unauthorized() {
    return new ApiError(401, 'Unauthorized');
  }

  /**
   *
   * @param message
   * @param errors
   * @returns {ApiError}
   * @constructor
   */
  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }

  /**
   * 
   * @param message
   * @returns {ApiError}
   * @constructor
   */
  static NotFound(message) {
    return new ApiError(404, message);
  }
}

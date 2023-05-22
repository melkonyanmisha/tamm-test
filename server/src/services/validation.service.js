import { validationResult } from 'express-validator';
import send from '../api/api.response.js';

export default (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    send(res, 400, `${ errors.array()[0].path }: ${ errors.array()[0].msg }`);
  }
}

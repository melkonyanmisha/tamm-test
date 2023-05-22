import ApiError from '../api/api-error.exception.js';

/**
 *
 * @param err
 * @param req
 * @param res
 * @param _
 * @returns {*}
 */
const errorMiddleware = (err, req, res, _) => {
  console.log(err);

  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }

  return res.status(500).json({ message: 'Unexpected error' });
};

export default errorMiddleware;

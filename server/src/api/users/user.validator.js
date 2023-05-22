import validate from '../../middlewares/validation.middleware.js';

export default {
  getUser: [
    validate('userId', { required: true, mongoId: true }, 'param')
  ]
}

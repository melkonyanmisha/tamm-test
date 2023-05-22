import validate from '../../middlewares/validation.middleware.js';

export default {
  registration: [
    validate('firstName', { required: true, length: { min: 2, max: 20 } }),
    validate('lastName', { required: true, length: { min: 2, max: 20 } }),
    validate('email', { required: true, email: true }),
    validate('password', { required: true })
  ],

  login: [
    validate('email', { required: true, email: true }),
    validate('password', { required: true })
  ],

  verify: [
    validate('activationCode', { required: true, length: { min: 12, max: 12 } }, 'param')
  ]
}

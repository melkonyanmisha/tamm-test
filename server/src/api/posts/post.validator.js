import validate from '../../middlewares/validation.middleware.js';

export default {
  createPost: [
    validate('title', { required: true, length: { min: 2, max: 100 } }),
    validate('text', { required: true, length: { min: 2, max: 2000 } })
  ],

  updatePost: [
    validate('title', { optional: true, length: { min: 2, max: 100 } }),
    validate('text', { optional: true, length: { min: 2, max: 2000 } })
  ],

  getPost: [
    validate('postId', { required: true, mongoId: true }, 'param')
  ],

  deletePost: [
    validate('postId', { required: true, mongoId: true }, 'param')
  ]
}

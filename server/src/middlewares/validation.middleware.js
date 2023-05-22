import validator from 'express-validator';

/**
 *
 * @param field
 * @param check
 * @param where
 * @returns {ValidationChain}
 */
export default (field, check = {}, where = 'body') => {
  const chain = validator[where](field);

  if (check.required) chain.not().isEmpty();
  if (check.optional) chain.optional();
  if (check.length) chain.isLength(check.length);
  if (check.email) chain.isEmail();
  if (check.mongoId) chain.isMongoId();

  return chain;
}

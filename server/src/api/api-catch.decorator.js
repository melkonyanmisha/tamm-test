/**
 *
 * @param fn
 * @returns {(function(*, *, *): void)|*}
 */
export default (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  }
}

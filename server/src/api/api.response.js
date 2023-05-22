import { STATUS_CODES } from 'http';

/**
 *
 * @param code
 * @param data
 * @returns {{data: null, message: string, status: string}|{data, status: string}}
 */
const payload = (code, data) => {
  return typeof data === 'string' || !data
    ? { status: STATUS_CODES[code], message: data, data: null }
    : { status: STATUS_CODES[code], data }
}

export default (res, code, data) => res.status(code).json(payload(code, data));

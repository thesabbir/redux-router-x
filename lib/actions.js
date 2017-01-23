import * as types from './actionTypes';

export function register(routes, cb) {
  return {
    type: types.REGISTER,
    payload: {
      routes,
      cb
    }
  }
}
export function changed(context) {
  return {
    type: types.CHANGED,
    payload: {
      context
    }
  }
}


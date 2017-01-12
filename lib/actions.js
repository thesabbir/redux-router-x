import * as types from './actionTypes';

export function register(path, component, cb) {
  return {
    type: types.REGISTER,
    payload: {
      path,
      component,
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


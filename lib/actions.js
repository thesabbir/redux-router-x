import * as types from './actionTypes';
import page from 'page.js';

export function register(routes, cb) {
  return (dispatch) => {
    Object.keys(routes).map(path => {
      page(path, cb);
    });
    page();
    dispatch({
      type: types.REGISTER,
      payload: {
        routes,
        cb,
        current: page.current
      }
    });
  }
}
export function routeChanged(context) {
  return {
    type: types.CHANGED,
    payload: {
      context
    }
  }
}

export function changeRoute(path) {

  return (dispatch) => {
    page.show(path, undefined, true, true);
    dispatch({
      type: types.CHANGE_ROUTE,
      payload: {
        path
      }
    });
  }
}

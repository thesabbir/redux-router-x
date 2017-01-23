import * as types from './actionTypes';
import page from 'page.js';
page.start();
window.page = page;
const initialState = {
  routes: {},
  ready: false,
  path: page.current
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INIT:
      return state;
    case types.CHANGED:
      return {
        ...state,
        ...action.payload.context
      };
    case types.REDIRECTED:
      return state;
    case types.REGISTER:
      Object.keys(action.payload.routes).map(path => {
        page(path, action.payload.cb);
      });
      return {
        ...state,
        ready: true,
        routes: action.payload.routes
      };
    default:
      return state;
  }
}

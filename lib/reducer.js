import * as types from './actionTypes';
import page from 'page.js';
page.start();

const initialState = {
  routes: [],
  path: "/"
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
      page(action.payload.path, action.payload.cb);
      return {
        ...state,
        routes: [...state.routes, action.payload]
      };
    default:
      return state;
  }
}

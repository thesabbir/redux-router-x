import * as types from './actionTypes';

const initialState = {
  routes: {},
  ready: false,
  path: '/'
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
    case types.CHANGE_ROUTE:
      return state;
    case types.REGISTER:
      return {
        ...state,
        ready: true,
        routes: action.payload.routes,
        path: action.payload.current
      };
    default:
      return state;
  }
}

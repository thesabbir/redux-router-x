import routerReducer from './reducer';
import RouteV from '../vue/component';
import * as actionCreators from './actions';
import { match } from './utils'
window.match = match
export {
  routerReducer,
  RouteV,
  actionCreators,
  match
}

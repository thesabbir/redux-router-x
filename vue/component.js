import { actionCreators } from '../lib';
import { connect } from 'vua-redux';
import { bindActionCreators } from 'redux';

const RouteV = {
  name: 'RouteV',
  props: {
    routes: {
      type: Object,
      required: true
    },
    routerActions: {
      type: Object
    },
    router: {
      type: Object
    },
    rend: {
      type: Object
    }
  },
  mounted() {
    this.routerActions.register(this.routes, (ctx, next) => {
      this.routerActions.routeChanged(ctx);
    });
  },
  render(h) {
    if (this.router.ready && this.rend) {
      return h(this.rend.component)
    }
  }
};

export default connect((state, props) => ({
  router: state.router,
  rend: state.router.routes[state.router.path]
}), (dispatch, props) => ({
  routerActions: bindActionCreators({
    ...actionCreators
  }, dispatch)
}))(RouteV);

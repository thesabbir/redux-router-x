import { actionCreators } from '../lib';
import { connect } from 'redux-vue';
import { bindActionCreators } from 'redux';

const Route = {
  name: 'Route',
  props: {
    component: {
      type: Object,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    routerActions: {
      type: Object
    },
    router: {
      type: Object
    }
  },
  mounted() {
    this.routerActions.register(this.path, this.component, (ctx, next) => {
      this.routerActions.changed(ctx);
      next();
    });
  },
  render(h) {
    if (this.router.path === this.path) {
      return h(this.component);
    }
    return null;
  }

};

export default connect((state, props) => ({
  router: state.router
}), (dispatch, props) => ({
  routerActions: bindActionCreators({
    ...actionCreators
  }, dispatch)
}))(Route);

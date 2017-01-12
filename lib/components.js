import * as actions from './actions';
import middleware from './middlewares';
import { connect } from 'redux-vue';
import { bindActionCreators } from 'redux';
import router from './router';

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
      console.log(ctx);
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
    ...actions
  }, dispatch)
}))(Route);

import { actionCreators } from '../lib';
import { connect } from 'vua-redux';
import { bindActionCreators } from 'redux';

const Link = {
  name: 'Link',
  props: {
    routerActions: {
      type: Object
    },
    to: {
      type: String
    },
    label: {
      type: String
    }
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      this.routerActions.changeRoute(this.to);
    }
  },
  render(h) {
    return <a href={this.to} on-click={this.handleClick}>{this.label}</a>
  }
};

export default connect((state, props) => ({
  router: state.router,
}), (dispatch, props) => ({
  routerActions: bindActionCreators({
    ...actionCreators
  }, dispatch)
}))(Link);

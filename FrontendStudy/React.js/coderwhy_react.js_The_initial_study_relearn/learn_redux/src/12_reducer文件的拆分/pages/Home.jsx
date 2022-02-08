import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { axiosBannersAction } from '../store/bannersStore/actionCreators';
import { incrementAction, decrementAction } from '../store/counterStore';

class Home extends PureComponent {
  componentDidMount() {
    this.props.getMultidata();
  }
  render() {
    return (
      <>
        <h2>Home</h2>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch(incrementAction());
    },
    decrement() {
      dispatch(decrementAction());
    },
    getMultidata() {
      dispatch(axiosBannersAction);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from 'react';
import { connect } from 'react-redux';

function About(props) {
  return (
    <>
      <h2>About</h2>
      <h4>当前计数: {props.counter}</h4>
      <ul>
        {
          props.bannerList.map(item => {
            return <li key={item.acm}>{item.title}</li>;
          })
        }
      </ul>
    </>
  );
}

const mapStateToProps = state => ({
  counter: state.counterInfo.counter,
  bannerList: state.bannersInfo.banners
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(About);

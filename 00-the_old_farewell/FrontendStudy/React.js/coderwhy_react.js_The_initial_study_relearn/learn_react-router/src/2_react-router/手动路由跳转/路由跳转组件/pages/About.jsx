import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

function TinyRipple() {
  return <div>TinyRipple</div>;
}

export default class About extends PureComponent {
  render() {
    return (
      <>
        <h2>About</h2>
        <button onClick={e => this.toTinyRipple()}>To tinyRipple</button>

        <Route path={'/about/tinyripple'} component={TinyRipple} />
      </>
    );
  }
  toTinyRipple() {
    this.props.history.push('/about/tinyripple');
  }
}

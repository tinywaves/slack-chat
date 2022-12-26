import React, { PureComponent } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

function One() {
  return <h2>ABOUT-ONE</h2>;
}

function Two() {
  return <h2>ABOUT-TWO</h2>;
}

export default class About extends PureComponent {
  render() {
    return (
      <>
        <h2>About</h2>

        <Link to={'/about'}> ABOUT </Link>
        <Link to={'/about/about1'}> ABOUT-ONE </Link>
        <Link to={'/about/about2'}> ABOUT-TWO </Link>

        <Switch>
          <Route exact path={'/about'} />
          <Route path={'/about/about1'} component={One} />
          <Route path={'/about/about2'} component={Two} />
        </Switch>
      </>
    );
  }
}

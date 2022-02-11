import React, { PureComponent } from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

import User from './pages/User';
import Login from './pages/Login';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <HashRouter>
          <Link to={'/user'}>Go User Page</Link>

          <Route path={'/user'} component={User} />
          <Route path={'/login'} component={Login} />
        </HashRouter>
      </>
    );
  }
}

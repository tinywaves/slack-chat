import React, { PureComponent } from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <HashRouter>
          <Link to={'/'}> HOME </Link>
          <Link to={'/about'}> ABOUT </Link>
          <Link to={'/profile'}> PROFILE </Link>

          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/profile'} component={Profile} />
        </HashRouter>
      </>
    );
  }
}

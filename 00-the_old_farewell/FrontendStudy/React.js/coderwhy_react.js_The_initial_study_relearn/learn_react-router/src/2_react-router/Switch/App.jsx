import React, { PureComponent } from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import User from './pages/User';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <HashRouter>
          <Link to={'/'}> HOME </Link>
          <Link to={'/about'}> ABOUT </Link>

          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/about'} component={About} />
            <Route exact path={'/:profile'} component={Profile} />
            <Route exact component={User} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}

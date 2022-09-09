import React, { PureComponent } from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <HashRouter>
          <NavLink exact to={'/'} activeStyle={{ color: 'red' }}>
            HOME{' '}
          </NavLink>
          <NavLink to={'/about'} activeStyle={{ color: 'green' }}>
            ABOUT{' '}
          </NavLink>
          <NavLink to={'/profile'} activeStyle={{ color: 'blue' }}>
            PROFILE{' '}
          </NavLink>

          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/profile'} component={Profile} />
        </HashRouter>
      </>
    );
  }
}

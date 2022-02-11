import React, { PureComponent } from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <HashRouter>
          <Link to={'/'}> Home </Link>
          <Link to={'/about'}> About </Link>

          <Route exact path={'/'} component={Home} />
          <Route path={'/about'} component={About} />
        </HashRouter>
      </>
    );
  }
}

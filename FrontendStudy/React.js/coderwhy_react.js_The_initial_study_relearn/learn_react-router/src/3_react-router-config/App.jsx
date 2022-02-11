import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './router';

function Home() {
  return <h2>Home</h2>;
}

function About(props) {
  return (
    <>
      <h2>About</h2>
      <Link to={'/about'}>About </Link>
      <Link to={'/about/about1'}>About1 </Link>
      <Link to={'/about/about2'}>About2 </Link>

      {/* props.route是renderRoutes添加的属性 */}
      {renderRoutes(props.route.routes)}
    </>
  );
}

function One() {
  return <h2>One</h2>;
}

function Two() {
  return <h2>Two</h2>;
}

function Three() {
  return <h2>Three</h2>;
}

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>

        {renderRoutes(routes)}
      </>
    );
  }
}

export { Home, About, One, Two, Three };

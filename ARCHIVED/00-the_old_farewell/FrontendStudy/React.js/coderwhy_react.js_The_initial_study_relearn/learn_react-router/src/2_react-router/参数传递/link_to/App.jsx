import React, { PureComponent } from 'react';
import { Link, Route } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About(props) {
  const info = props.location.state;
  return (
    <h2>
      {info.name} --- {info.id}
    </h2>
  );
}

const info = {
  name: 'tinyRipple',
  id: 111
};

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Link to={'/'}>Home</Link>
        <Link
          to={{
            pathname: '/user',
            state: info
          }}
        >
          About
        </Link>

        <Route exact path={'/'} component={Home} />
        <Route path={'/user'} component={About} />
      </>
    );
  }
}

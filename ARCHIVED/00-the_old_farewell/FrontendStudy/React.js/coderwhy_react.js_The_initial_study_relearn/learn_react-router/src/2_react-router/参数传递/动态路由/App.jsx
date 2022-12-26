import React, { PureComponent } from 'react';
import { Link, Route } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function Id(props) {
  return <h2>{`Id---${props.match.params.id}`}</h2>;
}

const id = 'tinyRipple';

export default class App extends PureComponent {
  render() {
    return (
      <>
        <Link to={'/'}>Home </Link>
        <Link to={`/${id}`}>Id </Link>

        <Route exact path={'/'} component={Home} />
        <Route path={'/:id'} component={Id} />
      </>
    );
  }
}

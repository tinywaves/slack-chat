import React, { PureComponent } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

class App extends PureComponent {
  render() {
    return (
      <>
        <Link to={'/'}> Home </Link>
        <button onClick={e => this.toAbout()}>To About</button>

        <Route exact path={'/'} component={Home} />
        <Route path={'/about'} component={About} />
      </>
    );
  }
  toAbout() {
    this.props.history.push('/about');
  }
}

export default withRouter(App);

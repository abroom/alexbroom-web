import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <div id="not-found" className="main">
        <h1>Whow... How did you get here?</h1>
        <h2>Page not found!</h2>
        <p>Error Code: 404</p>
        <Link to="/">
          <Button bsStyle="primary" bsSize="large">Return Home</Button>
        </Link>
      </div>
    );
  }
}

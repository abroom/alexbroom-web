import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import PageNotFound from './PageNotFound';
import Contact from './Contact';

export default class Header extends React.Component {
  render() {
    return (
      <div className="App-main">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Principal from '../src/pages/Principal'
import Error from '../src/pages/Error'


function Routes() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Principal} />
          <Route path="/principal" exact component={Principal} />
          <Route path="*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}
export default Routes;
import React from 'react';
import ReactDOM from 'react-dom';
import BrainMapper from './BrainMapper';
import Home from './Home';

import Error from './Error';
import Navigation from './Navigation';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends React.Component {

  render() {
    return (

      <div>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/brainmapper" component={BrainMapper} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
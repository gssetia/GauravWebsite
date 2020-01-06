import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import Header from './Header';
import brainMapper from './brainMapper';
import Tester from './Tester';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navigation from './Navigation';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


class App extends React.Component {

  constructor(props){
  super(props);
  this.state= {
      };
    }


  render(){
    return(

      <div>
        <BrowserRouter>
          <Navigation/>
          <Switch>
            <Route path = "/" component = {Home} exact/>
            <Route path = "/apps" component = {Tester}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/contact" component = {Contact}/>
            <Route component = {Error}/>
          </Switch>
        </BrowserRouter> 
      </div>
      
      );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
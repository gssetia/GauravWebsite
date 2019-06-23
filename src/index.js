import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import Header from './Header';
import brainMapper from './brainMapper';
import Tester from './Tester';
import './index.css';


class App extends React.Component {

  constructor(){
  super();
  this.state= {
      shouldRender:false,
      };
    }

  render(){
    return(
      <div>

        <title> Gaurav </title>
        
        {this.state.shouldRender ? <Tester/> : null}
        
        
        
        
        </div>
      );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
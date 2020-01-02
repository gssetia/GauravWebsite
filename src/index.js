import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import Header from './Header';
import brainMapper from './brainMapper';
import Tester from './Tester';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './index.css';


class App extends React.Component {

  constructor(props){
  super(props);
  this.state= {
      homeBool:true,
      appBool:false,
      aboutBool:false,
      contactBool:false,
      };

    this.onHome = this.onHome.bind(this);
    this.onApp = this.onApp.bind(this);
    this.onAbout = this.onAbout.bind(this);
    this.onContact = this.onContact.bind(this); 
    }

    onHome(){
      this.setState({homeBool:true});
      this.setState({appBool:false});
      this.setState({aboutBool:false});
      this.setState({contactBool:false});
    }

    onApp(){
      this.setState({homeBool:false});
      this.setState({appBool:true});
      this.setState({aboutBool:false});
      this.setState({contactBool:false});
    }

    onAbout(){
      this.setState({homeBool:false});
      this.setState({appBool:false});
      this.setState({aboutBool:true});
      this.setState({contactBool:false});
    }

    onContact(){
      this.setState({homeBool:false});
      this.setState({appBool:false});
      this.setState({aboutBool:false});
      this.setState({contactBool:true});
    }


  render(){
    return(
      <div>
      
      <body className="w3-blue">
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center w3-white navBar">
        

        <a onClick = {this.onHome} className="w3-bar-item w3-button w3-padding-large w3-blue w3-hover-white navBarButtons">
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </a>
        <a onClick = {this.onApp} className="w3-bar-item w3-button w3-padding-large w3-blue w3-hover-white navBarButtons">
          <i className="fa fa-star w3-xxlarge"></i>
          <p>APPS</p>
        </a>
        <a onClick = {this.onAbout} className="w3-bar-item w3-button w3-padding-large w3-blue w3-hover-white navBarButtons">
          <i className="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </a>
        <a onClick = {this.onContact} className="w3-bar-item w3-button w3-padding-large w3-blue w3-white-blue navBarButtons">
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </a>

      </nav>
      </body>
         

      {this.state.homeBool && <Home/>}       
      {this.state.appBool && <Tester/>}
      {this.state.aboutBool && <About/>} 
      {this.state.contactBool && <Contact/>} 
      
              
              
              
              </div>
      );
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
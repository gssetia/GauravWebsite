import React from 'react';
import { NavLink } from "react-router-dom";
import Tester from './Tester';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default class Navigation extends React.Component {

	constructor(){
	super();
	this.state= {
			
			};
			
		}

		
		
	render(){
		return(
				
      <body className="w3-white">
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

      <nav className="w3-sidebar w3-bar-block w3-medium w3-hide-small w3-center navBar">
        

        <NavLink to = "/" onClick = {this.onHome} className="w3-bar-item w3-button w3-padding-large w3-white navBarButtons">
          <i className="fa fa-home w3-xxlarge"></i>
          <p>HOME</p>
        </NavLink>
        <NavLink to = "/apps" onClick = {this.onApp} className="w3-bar-item w3-button w3-padding-large w3-white navBarButtons">
          <i className="fa fa-star w3-xxlarge"></i>
          <p>APPS</p>
        </NavLink>
        <NavLink to = "/about" onClick = {this.onAbout} className="w3-bar-item w3-button w3-padding-large w3-white navBarButtons">
          <i className="fa fa-user w3-xxlarge"></i>
          <p>ABOUT</p>
        </NavLink>
        <NavLink to = "/contact" onClick = {this.onContact} className="w3-bar-item w3-button w3-padding-large w3-white navBarButtons">
          <i className="fa fa-envelope w3-xxlarge"></i>
          <p>CONTACT</p>
        </NavLink>

      </nav>
      </body>
			);
	}
}
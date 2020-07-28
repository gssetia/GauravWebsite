import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from './Components/Resume.pdf';
import Scrollspy from 'react-scrollspy';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Form, FormControl } from 'react-bootstrap';


export default class Navigation extends React.Component {
	render(){
		return(
      
      // <body className='Navb' data-spy="scroll" data-target='#navb' data-offset='50'>
      //   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      //   <Navbar  expand="lg" fixed="top" bg='light'>
      //     {/* <Navbar.Brand href="#home">Gaurav Setia</Navbar.Brand> */}
      //     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      //     <Navbar.Collapse id="basic-navbar-nav">
      //       <Nav className="mr-auto">
      //         <Nav.Link href="#home"><i className="fa fa-home w3-large navSpace navImgSpace"></i>Home</Nav.Link>
      //         <Nav.Link href="#about"><i className="fa fa-user w3-large navSpace navImgSpace"></i>About</Nav.Link>
      //         <Nav.Link href="#apps"><i className="fa fa-star w3-large navSpace navImgSpace"></i>Projects</Nav.Link>
      //         <Nav.Link href="#contact"><i className="fa fa-envelope w3-large navSpace navImgSpace"></i>Contact</Nav.Link>
      //       </Nav>
      //       <Form inline>
      //         <a href={resume} download>
      //           <Button variant="outline-success">Resume (.pdf)</Button>
      //         </a>
      //       </Form>
      //     </Navbar.Collapse>
      //   </Navbar>
      // </body>





        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default fixed-top">  
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Apps</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form className="form-inline">
              <a className="nav-link" href="#">Resume</a>
            </form>
          </div>
        </nav>
        
      /* <body className="w3-white">
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
      </body> */
      
      
			);
	}
}
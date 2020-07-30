import React from 'react';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from './Components/Resume.pdf';
import ScrollspyNav from 'react-scrollspy-nav';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Form, FormControl } from 'react-bootstrap';


export default class Navigation extends React.Component {
	render(){
		return(

      <body>
        <style type="text/css">
          {`
          .btn-flat {
            background-color: black;
            color: white;
          }
          .btn-flat:hover{
            color: grey;
          }
          `}
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <Navbar className ="navbarClas" variant='dark' bg='dark' expand="md" fixed="top">
        
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto okay">
              <div className='navBeginning'></div>
              <Nav.Link className ='navSpace active' href="#1"><i className="fa fa-home w3-large navImgSpace"></i>Home</Nav.Link>
              <Nav.Link className ='navSpace active' href="#2"><i className="fa fa-user w3-large navImgSpace"></i>About</Nav.Link>
              <Nav.Link className ='navSpace active' href="#3"><i className="fa fa-star w3-large navImgSpace"></i>Projects</Nav.Link>
              <Nav.Link className ='navSpace active' href="#4"><i className="fa fa-envelope w3-large navImgSpace"></i>Contact</Nav.Link>
            </Nav>
            <Form inline>
              <a href={resume} download>
                <Button variant="flat">Resume (.pdf)</Button>
              </a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <ScrollspyNav scrollTargetIds={["1", "2", "3", "4"]} activeNavClass='isCurrent'></ScrollspyNav>
      </body>




      // <body data-spy="scroll" data-target='#Content' data-offset='0'>
      //   <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default fixed-top">  
      //     <button className="navbar-toggler" data-toggle="collapse" data-target="#Content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
          
      //     <div className="collapse navbar-collapse" >
      //       <ul className="navbar-nav mr-auto" id="Content">
      //       {/* <Scrollspy className='scrollspy' items={['1','2', '3', '4']} currentClassName='isCurrent'> */}
      //         <li className="nav-item">
      //           <a className="nav-link" href="#1">Home </a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="#2">About</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="#3">Apps</a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="#4">Contact</a>
      //         </li>
      //         {/* </Scrollspy> */}
      //       </ul>
      //       <form className="form-inline">
      //         <a className="nav-link" href="#">Resume</a>
      //       </form>
      //     </div>
          
      //   </nav>
      //   </body>
        
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
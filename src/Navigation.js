import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from './Components/Resume.pdf';
import ScrollspyNav from 'react-scrollspy-nav';
import { Link } from 'react-scroll';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';


export default class Navigation extends React.Component {
  render() {
    return (

      <div>
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <Navbar className="navbarClas" variant='dark' bg='dark' expand="md" fixed="top">

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto okay">
              <div className='navBeginning'></div>
              <Link smooth={true} duration={1000} to='1'><Nav.Link className='navSpace active' href="#1"><i className="fa fa-home w3-large navImgSpace"></i>Home</Nav.Link></Link>
              <Link smooth={true} duration={1000} to='2'><Nav.Link className='navSpace active' href="#2"><i className="fa fa-user w3-large navImgSpace"></i>About</Nav.Link></Link>
              <Link smooth={true} duration={1000} to='3'><Nav.Link className='navSpace active' href="#3"><i className="fa fa-star w3-large navImgSpace"></i>Projects</Nav.Link></Link>
              <Link smooth={true} duration={1000} to='4'><Nav.Link className='navSpace active' href="#4"><i className="fa fa-envelope w3-large navImgSpace"></i>Contact</Nav.Link></Link>
            </Nav>
            <Form inline>
              <a href={resume} download>
                <Button variant="flat">Resume (.pdf)</Button>
              </a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <ScrollspyNav scrollTargetIds={["1", "2", "3", "4"]} activeNavClass='isCurrent'></ScrollspyNav>
      </div>
    );
  }
}
import React from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import './index.css';
import About from './About';
import Apps from './Apps';
import Contact from './Contact';
import { Container } from 'react-bootstrap';
import logo from './Components/University-of-Toronto-01.svg';
import gs from './Components/gss.jpeg';

const FadeIn = styled.div`animation: 4s ${keyframes`${fadeIn}`}`;


export default class Home extends React.Component {

	constructor(){
	super();
	this.state= {
			
			};
			
		}

		
		
	render(){
		return(
			<div>
				<div className = "container" >
				
					<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
					<div id = '1' className = 'topOfPage row justify-content-center home'> 
						<div className = 'col-md-3 col-sm-12 centerContact'>
							<img className = 'gs' src = {gs} ></img>
						</div>
						<div className = 'col-md-7 col-sm-12'>
							<FadeIn>
								<h2 className = 'intro'> 
									<span className = 'welcome'>Welcome to my Website!</span><br></br><br></br>
									<span className = 'name'>My name is Gaurav Setia</span><br></br>
									<span className = 'homeContent'> Software Engineer at the</span>
									<img className = 'uoftlogo' src = {logo} ></img>
									
								</h2>
							</FadeIn>
						</div>
					</div>
					
					<div id = '2'>
						<hr className = 'divider' />
						<About/>
					</div>

					<div id = '3'>
						<hr className = 'divider' />
						<Apps/>
					</div>
					
					<div id = '4'>
					<hr className = 'divider' />
						<Contact/>
					</div>
					
					<hr className = 'divider'/>
				</div>

				
					
				
			</div>
			);
	}
}
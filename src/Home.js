import React from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import './index.css';
import About from './About';
import Apps from './Apps';
import Contact from './Contact';
import { Container } from 'react-bootstrap';
import logo from './Components/University-of-Toronto-01.svg';

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
					<div id = '1' className = 'row justify-content-center home'> 
						<div className = 'col-3'>
							<div className = 'Gaurav'></div>
						</div>
						<div className = 'col-7'>
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
					
					<hr className = 'divider' />

					<div id = '2' className = '' >
						<About/>
					</div>
					<hr className = 'divider' />
					<div id = '3' >
						<Apps/>
					</div>
					<hr className = 'divider' />
					<div id = '4' className = 'rows' >
						<Contact/>
					</div>
					<hr className = 'divider'/>
				</div>

				
					
				
			</div>
			);
	}
}
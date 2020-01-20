import React from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import './index.css';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;


export default class Home extends React.Component {

	constructor(){
	super();
	this.state= {
			
			};
			
		}

		
		
	render(){
		return(
				<body>
				
				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
				
				<div className = 'Gaurav'>
				 </div>
				<FadeIn>
				<h2 className = 'intro'> <span className = 'welcome'>Welcome to my Website!</span><br></br><br></br>
				<span className = 'name'>Gaurav Setia</span><br></br>
				<span className = 'homeContent'> Computer Programmer <br></br>at the University of <br></br>Toronto </span> </h2>
				</FadeIn>
				</body>
			);
	}
}
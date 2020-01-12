import React from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import Gaurav from './Components/gs.JPG';
import './index.css';
import Gaurav2 from './Components/gauravPic.jpeg';
// <img src= {Gaurav} className = "Gaurav"/> 

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
				<h1 className = 'name'> I am Gaurav Setia </h1>
				<h1 className = 'welcome'> Welcome to my website! </h1>
				<h2 className = 'intro'> Computer Programmer at the University of Toronto </h2>
				</FadeIn>
				</body>
			);
	}
}
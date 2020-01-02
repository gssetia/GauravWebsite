import React from 'react';
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
import {Animated} from "react-animated-css";
import Gaurav from'./Components/gs.JPG';
import './index.css';
// <img src= {Gaurav} className = "Gaurav"/> 

const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;


export default class Home extends React.Component {

	constructor(){
	super();
	this.state= {
			
			};
			
		}

		
		
	render(){
		return(
				<div>
				
				<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
				<h1 className = 'welcome w3-animate-fading'> Welcome! </h1>
				</div>
			);
	}
}
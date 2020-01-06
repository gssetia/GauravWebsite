import React from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

export default class Layout extends React.Component {

	constructor(){
	super();
	this.state= {
     shouldR:true,
			};	
		}
		changeShown = () => {
				this.setState({
					shouldR:false
				});
			}
		
	render(){
		return(
				<div>

		<h1 className="styles1"> Brain Mapper!
		<br/>
			<a className = "startreset" onClick= {this.props.onClick} > {this.props.reset} </a>  
        </h1>
        <FadeIn>
        {this.state.shouldR ? 
		<div className = "rules">		
		<p className = "howtoplay"> How to Play</p>
		<ol>
		  <li> You have to guess the country by only looking at its outline. The outline is not to scale. </li>
		  <br/>
		  <li> You can use the 3 hints provided, however each hint will lower the points you earn from a correct answer by 1. You earn 4 points with no hints used to only 1 point after using all hints. 
		  <br/>
		  <br/>
		    First hint: A Brief Phrase
		  <br/>
			Second hint: The Flag 
		  <br/>
		  	Third hint: The Capital City </li>
		  	<br/>
			<li> If all else fails, you can skip to the next country. Goodluck! </li>


		</ol>
				</div> : null} </FadeIn>
				
				</div>
			);
	}
}

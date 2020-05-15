import React from 'react';
import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

export default class Contact extends React.Component {

	constructor(){
	super();
	this.state= {

			};
			
		}
		
	render(){
		return(
				<div>
					<div className='contactContainer'>
					<h1 className ='contactTitle'> Reach out to me </h1>
						<FadeIn>
        				<p className='contactContent'> Email: gaurav.singh.setia@gmail.com<br></br><br></br>
        				Linkedin: linkedin.com/in/gauravdeep-setia<br></br><br></br>
        				GitHub: github.com/gssetia</p>
        				</FadeIn>
        			</div>
				</div>

			);
	}
}
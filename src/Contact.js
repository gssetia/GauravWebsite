import React from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import github from './Components/github.svg';
import linkedin from './Components/linkedin.png';

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

export default class Contact extends React.Component {
	
	render(){
		return(
				<div>
					<div className='row justify-content-center'>
					
						<h1> Reach out to me </h1>
					</div>
					<div className='row justify-content-center largeSpace'>
							
						<div className='col-3 centerContact'>
							
							<a target="_blank" href="https://www.linkedin.com/in/gauravdeep-setia/">
								<img height='60' width='60' src={linkedin}></img>
								<div className ='centerContract'>LinkedIn</div>
								</a>
						</div>

						<div className='col-3 centerContact'><a target="_blank" href="https://github.com/gssetia">
							<img height='60' width='60' src={github}></img>
							<div className ='centerContract'>GitHub</div>
							</a>
						</div>
					
      				</div>		
					<div className='row justify-content-center largeSpace largerSpace'>
						<a href="mailto:gaurav.singh.setia@gmail.com">
							<button className="col-0 centerContract w3-button w3-black">Email Me</button>
						</a>
					</div>		
				</div>

			);
	}
}
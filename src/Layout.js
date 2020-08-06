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

		rulesShown = () => {
				this.setState({
					shouldR:true
				});
			}
		
	render(){
		return(
			<div className='row justify-content-center'>
				
				<div className = 'col-md-6 col-9'>
					<div className="styles1"> Brain Mapper! <br/>
						<a className = "startreset" onClick= {this.props.onClick} > {this.props.reset} </a> 
						
						<a className = "startreset" onClick= {this.props.onRules} > Rules </a> 
					</div>
				</div>
			
			
				<div className='row justify-content-center'>

  					<FadeIn className = 'col-md-8 col-sm-12 largeSpace'>

						{ this.state.shouldR ? 

						<div className = "rules">		
							<p className = "howtoplay"> How to Play</p>
							<ol className='flex-start'>
								<li> Guess the country by only looking at its outline.<br/>The outline is not to scale. </li> <br/>
				
								<li> You can use the 3 hints provided, however each hint will lower the points you earn from a correct answer by 1. You earn 4 points with no hints used to only 1 point after using all hints. <br/><br/>
									<ul>
										<li>A Brief Phrase </li>
										<li>The Flag </li> 						
										<li>The Capital City </li> 
									</ul> 
								</li> <br/>
									
								<li> If all else fails, you can skip to the next country. Goodluck! </li>
							</ol>
						</div> 
						: null} 
					</FadeIn>
				</div>
			</div>
				
			);
	}
}

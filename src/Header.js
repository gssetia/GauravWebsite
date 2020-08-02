import React from 'react';
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
import { fadeIn } from 'react-animations'

const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;
const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;
const FadeInLonger = styled.div`animation: 10s ${keyframes`${fadeIn}`}`;

export default class Header extends React.Component {

	render(){
      
		return(					
			
				<form className = 'row justify-content-center' onSubmit={this.props.handleSubmit}>
					
					<div className ='col-3 border'>
						<h2 className="skipTotal"> Skips: {this.props.skipTotal}</h2>
						<h2 className="hintTotal"> Hints: {this.props.hintTotal}</h2>
						<h2 className="wrongTotal"> Incorrect: {this.props.wrongTotal}</h2>
						<h1 className="pointsTitle">Total Points:</h1>
					</div>

					<FadeInLonger className='col-6 border centerContact'>
						<Pulse>
							<img alt="outline" className="img" id = "img" src={this.props.images[this.props.rank].value} alt="Outline of a country"/>
						</Pulse>
					</FadeInLonger>

					<div className='col-3'>
						<h1 className="hintsTitle">Hints:</h1>

						<span id = "dot1" class="dot"></span>
						<span id = "dot2" class="dot2"></span>
						<span id = "dot3" class="dot3"></span>

						<h1 className="hintText">{this.props.hintText}</h1>

						<img className="flag" src={this.props.flag} width="20" height="25"/>

						<h1 className="capitalText">{this.props.capitalText}</h1>
					</div>

					<div className = 'col-12'>
					<h1 className="pointText">{this.props.points}</h1>

					<button type="submit" className="buttonGuess" onClick={this.props.onGuess}>Guess</button>
				
					<input type="text" value={this.props.val} onSubmit={this.props.handleSubmit} onChange={this.props.handleChange} maxLength={25} autoComplete="off" className="input" id="input"></input>

					<button type="submit" className="skip" onClick={this.props.onSkip}>Skip</button>

					<button type="submit" className="hint" onClick={this.props.onHint}>Hint</button>

					<button type="submit" className="mute" onClick={this.props.onMute}> {this.props.muteText}</button>
					
					</div>
				
				</form>
		

		
				);
			}
		
	}


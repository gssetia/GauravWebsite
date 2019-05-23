import React from 'react';
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
import {Animated} from "react-animated-css";

const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;

export default class Header extends React.Component {
	constructor(){
		super();
		this.state= {
	};

	}



	render(){
      
		return(
			
				<div>

		<form onSubmit={this.props.handleSubmit}>

		<h1 className="pointsTitle">Total Points:</h1>

			<h1 className="pointText">{this.props.points}</h1>

			

			<button type="submit" className="buttonGuess" onClick={this.props.onGuess}>Guess</button>
		
			<input type="text" value={this.props.val} onSubmit={this.props.handleSubmit} onChange={this.props.handleChange} maxLength={25} autoComplete="off" className="input" id="input"></input>

			<button type="submit" className="skip" onClick={this.props.onSkip}>Skip</button>

			<button type="submit" className="hint" onClick={this.props.onHint}>Hint</button>

			<h1 className="hintsTitle">Hints:</h1>

			<span id = "dot1" class="dot"></span>
			<span id = "dot2" class="dot2"></span>
			<span id = "dot3" class="dot3"></span>
			<h1 className="hintText">{this.props.hintText}</h1>

			<h2 className="skipTotal">You skipped {this.props.skipTotal} time{this.props.skipS}.</h2>
			<h2 className="hintTotal">You hinted {this.props.hintTotal} time{this.props.hintS}.</h2>
			<h2 className="wrongTotal">You guessed {this.props.wrongTotal} incorrectly.</h2>
			<Pulse>
    			<img alt="outline" className="img" id = "img" src={this.props.images[this.props.rank].value}/>
			</Pulse>
			
			<img className="flag" src={this.props.flag} width="20" height="25"/>

			<h1 className="capitalText">{this.props.capitalText}</h1>

		</form>

				</div>

		
				);
			}
		
	}


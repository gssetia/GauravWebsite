import React from 'react';
import styled, { keyframes } from 'styled-components'
import { pulse } from 'react-animations'
import { fadeIn } from 'react-animations'

const Pulse = styled.div`animation: 3s ${keyframes`${pulse}`} infinite`;
const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`}`;
const FadeInLonger = styled.div`animation: 10s ${keyframes`${fadeIn}`}`;

export default class Header extends React.Component {
	constructor(){
		super();
		this.state= {
		 position:"fixed",
				
		};	
	}

    render(){
      
        return(                 
            
                <form className = 'row myrow largeSpace justify-content-center' onSubmit={this.props.handleSubmit}>
                    
                    <div className ='phone counts col-lg-2 col-md-6 col-sm-6 col-5 order-lg-1'>
						
						<button type="submit" className="buttonGuess" onClick={this.props.onGuess}>Guess</button>
						<button className="mute layers gamePhone" onClick={this.props.onMute}> {this.props.muteText}</button>
						<span className='sideBar'>
							<div className="layers gamePhone"> Skips: {this.props.skipTotal}</div>
							<div className="layers gamePhone"> Hints: {this.props.hintTotal}</div>
							<div className="layers gamePhone"> Incorrect: {this.props.wrongTotal}</div>
							<div className="layers points gamePhone">Points:<span className="pointText">{this.props.points}</span></div>
						</span>
                    </div>

					<div className='hints phone col-lg-2 col-md-6 col-sm-6 col-5 order-lg-3'>				
					
						<div className="hintText">{this.props.hintText}</div>
					
						<img className="flag" src={this.props.flag} width="20" height="25"/>

						<h1 className="capitalText">{this.props.capitalText}</h1>
					
					</div>

                    <FadeInLonger className='col-lg-6 col-md-12 col-sm-12 centerContact order-lg-2'>
                        <Pulse>
                            <img alt="outline" className="img imgs" id = "img" src={this.props.images[this.props.rank].value} alt="Outline of a country"/>
                        </Pulse>
                    </FadeInLonger>



                    <div style={{display: this.props.display}} className = 'row'>
                    
                        <input style={{position: this.props.position}} type="text" value={this.props.val} onSubmit={this.props.handleSubmit} onChange={this.props.handleChange} maxLength={25} autoComplete="off" className="input" id="input"></input>

                        <button style={{position: this.props.position}} type="submit" className="skip" onClick={this.props.onSkip}>Skip</button>

                        <button style={{position: this.props.position}} type="submit" className="hint" onClick={this.props.onHint}>Hint</button>
                    </div>
                
                </form>
        

        
                );
            }
        
    }

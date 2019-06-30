import React from 'react';


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
        {this.state.shouldR ? 
		<div className = "rules">		
		<p className = "howtoplay"> How to Play</p>
		<ol>
		  <li> You have to guess the country by only looking at its outline. The outline is not to scale. </li>
		  <br/>
		  <li> You can use the 3 hints provided, however the hints lower the points you obtain from a correct answer. Starting at 4 points with no hints to 1 point using all hints. 
		  <br/>
		  <br/>
		    First hint: a brief phrase
		  <br/>
			Second hint: the flag 
		  <br/>
		  	Third hint: the capital city </li>
		  	<br/>
			<li> If all else fails, you can skip to the next country. Goodluck! </li>


		</ol>
				</div> : null}
				
				</div>
			);
	}
}

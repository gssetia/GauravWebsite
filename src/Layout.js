import React from 'react';


export default class Layout extends React.Component {

	constructor(){
	super();
	this.state= {
     shouldRender:false,

			};
		}

		//<a onClick= {(e) =>{this.clicked();}} >
	render(){
		return(
				<div>

		<h1 className="styles1"> Brain Mapper!
		<br/>
			<a onClick= {this.props.onClick} > Click this text to {this.props.reset} </a>  
        </h1>
        
				
				
				
				</div>
			);
	}
}
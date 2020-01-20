import React from 'react';
import errorPic from './Components/errorpic.png';
import './index.css';


export default class Error extends React.Component {

	constructor(){
	super();
	this.state= {
			
			};
			
		}

		
		
	render(){
		return(
				<div>
				<img className="errorPic" src={errorPic}/>
				<h1 className = 'errorMessage'> Page not found</h1>
				</div>
			);
	}
}
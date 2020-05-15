import React from 'react';
import errorPic from './Components/errorpic.png';
import './index.css';

import { ThemeConsumer } from 'styled-components';


export default class Error extends React.Component {

	constructor(){
	super();
	this.state= {

			};
			
		}
		
		
	render(){
		return(
				<div>
				<img className="errorPic" src={errorPic} alt="Error meme"/>
				<h1 className = 'errorMessage'> Page not found </h1>
				</div>
			);
	}
}
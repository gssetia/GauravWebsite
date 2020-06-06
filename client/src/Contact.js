import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOM from 'react-dom';
import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

export default class Contact extends React.Component {

	constructor(){
	super();
	this.state= {
			value: 'gaurav.singh.setia@gmail.com',
			copied: false,
		};
			
	}
	myFunction() {
		var copyText = "gaurav.singh.setia@gmail.com";
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand("copy");
			
		var tooltip = document.getElementById("myTooltip");
		tooltip.innerHTML = "Copied: " + copyText.value;
	}
		  
	outFunc() {
		var tooltip = document.getElementById("myTooltip");
		tooltip.innerHTML = "Copy to clipboard";
	}

	render(){
		return(
				<div>
					<div className='contactContainer'>
					<h1 className ='contactTitle'> Reach out to me </h1>
						<FadeIn>
        				<ul className='contactContent'> 
        				<div><a target="_blank" href="https://www.linkedin.com/in/gauravdeep-setia/">LinkedIn</a></div><br></br>
        				<div><a target="_blank" href="https://github.com/gssetia">GitHub</a></div><br></br>
						<div class="tooltip">
						<CopyToClipboard text={this.state.value}
							onCopy={() => this.setState({copied: true})}>
							<button>
							<span class="tooltiptext" id="myTooltip">Copy to clipboard</span>
							Email
							</button>
						</CopyToClipboard>
  							{this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
  							
						</div>
						</ul>
        				</FadeIn>
        			</div>
				</div>

			);
	}
}
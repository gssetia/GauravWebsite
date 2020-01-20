import React from 'react';
import suit from './Components/suit.jpeg';

export default class About extends React.Component {

	constructor(){
	super();
	this.state= {

			};
			
		}

		
			
		
	render(){
		return(
				<div class="post-container">
					<h3 class="post-title"></h3>
					<div className = 'container'>
					<div class="post-thumb">
						<img src= {suit} />
					</div>
					<div class="post-content">
						<p> Hello! Let me tell you a little bit about myself. 
						I'm currently in second year, studying at the University of Toronto. 
						I'm on track to graduate in 2022 with an Honours Bachelor of Science with a Specialization of Computer Science. 
						<br></br><br></br>As a kid, I was always around technology and wondered how websites and robots performed whatever actions that we desired. 
						I fell in love with the idea that I could learn to design and implement a computer to do whatever I wanted.
						In high school, I began programming and instantly began to realize the depth and complexity it takes to program the things that I took for granted. 
						Such as calculators, cell phones, or even stop lights.
						It's very difficult to comprehend all the work that's needed for me to simply google search.
						This led me to appreciate the world around me.
						Now that I have the opportunity to learn the magic that comes from computer science, I'm excited and motivated to create and contribute.    </p>
					</div>
					</div>
				</div>
			);
	}
}
import React from 'react';
import medium from './Components/medium.png';
import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

export default class About extends React.Component {


	render() {
		return (
			<div>

				<div className='row justify-content-center'>
					<span className='col-md-9 col-sm-12 space aboutTitle'> A little bit about me</span>
				</div>

				<div className='row justify-content-center'>
					<div className="col-md-8 col-sm-11 space">
						<FadeIn>
							<p>
								<span className='emphasis space'>Hello! My name is Gaurav and I'm an aspiring software engineer.</span> <br/>
								I have just completed my final year studying at the University of Toronto. 
								I will graduate with an Honours Bachelor of Science with a specialization in Computer Science.
								For my professional experience year of co-op, I worked as a Software Engineer at AMD.
								My experience working at AMD has brought out the best of my work ethic.
								I have developed my skills in professional communication and expert problem solving from working at AMD.
								After finishing my time at AMD, I was awarded a Certificate of Recognition from the AMD University Relations Team.
								If you would like to read a recommendation from my manager, please visit my <a href="#4"> Linkedin page</a>. 
								For a software engineer, there is always more to learn. For example, I created a React Native Android app called <a href="#3">SpeechSweep</a> which is in the process of being published to Google's Play Store.
								
							</p>
						</FadeIn>
					</div>
				</div>

				<div className='row justify-content-center'>
					<span className='col-md-9 col-sm-12 space largeSpace aboutTitle'> My Skillset</span>
				</div>

				<div className='row justify-content-center aboutLists'>
					<div className='col-3 listFront space'>
						<FadeIn>
							<h4>Languages</h4>
							<ul>
								<li>
									Python
								</li>
								<li>
									JavaScript
								</li>
								<li>
									HTML/CSS
								</li>
								<li>
									C/C++
								</li>
								<li>
									Bash/Shell
								</li>
								<li>
									Dart
								</li>
								<li>
									Java
								</li>
							</ul>
						</FadeIn>
					</div>

					<div className='col-3 listFront space'>
						<FadeIn>
							<h4>Technologies</h4>
							<ul>
								<li>
									React
								</li>
								<li>
									Node.Js
								</li>
								<li>
									React Native
								</li>
								<li>
									Django
								</li>
								<li>
									Flask
								</li>
								<li>
									Git
								</li>
								<li>
									Firebase
								</li>
								<li>
									Flutter
								</li>
								<li>
									AWS
								</li>
								<li>
									Redis
								</li>
								<li>
									Docker
								</li>
								<li>
									PostgreSQL
								</li>
								<li>
									NoSQL
								</li>
								<li>
									MySQL
								</li>
							</ul>
						</FadeIn>
					</div>
				</div>

				<div className='row justify-content-center space'>
					<span className='col-md-6 col-sm-12 space largeSpace aboutTitle blogText'>For more about me, check out my blogposts on Medium</span>
				</div>

				<div className='row justify-content-center largerSpace'>
					<a href='https://medium.com/@gaurav.singh.setia' target="_blank" className='col-0' rel="noopener noreferrer" >
						<img alt='Medium' height='100' width='100' src={medium}></img>
					</a>
				</div>

			</div>
		);
	}
}
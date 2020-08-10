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
								<span className='emphasis space'>Hello! My name is Gaurav Setia and I'm an aspiring software engineer.</span> <br/>
								I'm currently in third year, studying at the University of Toronto.
								I'm on track to graduate in 2022 with an Honours Bachelor of Science with a specialization in Computer Science.
								My current experience studying at the University of Toronto has brought out the best of my work ethic.
								I learned which skills to develop and how to grow the most effective way as a future software engineer.
								My favourite part of this journey are the new and exciting technologies that are introduced daily. For a software engineer, there is always more to learn.
							</p>
						</FadeIn>
					</div>
				</div>

				<div className='row justify-content-center'>
					<span className='col-md-9 col-sm-12 space largeSpace aboutTitle'> My Skillset</span>
				</div>

				<div className='row justify-content-center'>
					<div className='col-4 aboutLists listFront space'>
						<FadeIn>
							<h4>Languages</h4>
							<ul>
								<li>
									Python
								</li>
								<li>
									Java
								</li>
								<li>
									C
								</li>
								<li>
									JavaScript
								</li>
								<li>
									HTML/CSS
								</li>
								<li>
									JavaScript
								</li>
								<li>
									And more..
								</li>
							</ul>
						</FadeIn>
					</div>

					<div className='col-4 aboutLists listFront space'>
						<FadeIn>
							<h4>Technologies</h4>
							<ul>
								<li>
									React
								</li>
								<li>
									Git
								</li>
								<li>
									Node.Js
								</li>
								<li>
									Heroku
								</li>
								<li>
									Docker
								</li>
								<li>
									MySQL
								</li>
								<li>
									And more..
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
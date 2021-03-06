import React from 'react';
import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'
import './index.css';
import About from './About';
import Apps from './Apps';
import Contact from './Contact';
import logo from './Components/University-of-Toronto-01.svg';
import gs from './Components/gss.jpeg';

const FadeIn = styled.div`animation: 4s ${keyframes`${fadeIn}`}`;

export default class Home extends React.Component {
	render() {
		return (
			<div>

				<div className="container">
					<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

					<div id='1' className='topOfPage row justify-content-center home'>

						<div className='col-md-4 col-sm-12 centerContact'>
							<img alt='Head shot' className='gs frontLogo' src={gs} ></img>
						</div>

						<div className='col-md-8 col-sm-12'>
							<FadeIn>
								<h2 className='intro'>
									<span className='welcome front'>Welcome to my Website!</span><br></br><br></br>
									<span className='name front'>My name is Gaurav Setia</span><br></br>
									<span className='subText subFront'> Software Engineer at the</span>
									<img alt='UofT Logo' className='uoftlogo imgFront' src={logo} ></img>
								</h2>
							</FadeIn>
						</div>
					</div>

					<div id='2'>
						<hr className='divider' />
						<About />
					</div>

					<div id='3'>
						<hr className='divider' />
						<Apps />
					</div>

					<div id='4'>
						<hr className='divider' />
						<Contact />
					</div>

					<hr className='divider' />
				</div>
			</div>
		);
	}
}
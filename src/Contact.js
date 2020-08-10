import React from 'react';
import github from './Components/github.svg';
import linkedin from './Components/linkedin.png';

export default class Contact extends React.Component {
	render() {
		return (
			<div>

				<div className='row justify-content-center'>
					<h1> Connect With Me! </h1>
				</div>

				<div className='row justify-content-center largeSpace'>

					<div className='col-3 centerContact'>
						<a target="_blank" href="https://www.linkedin.com/in/gauravdeep-setia/" rel="noopener noreferrer">
							<img alt='LinkedIn Logo' height='60' width='60' src={linkedin}></img>
							<div className='centerContract'>LinkedIn</div>
						</a>
					</div>

					<div className='col-3 centerContact'>
						<a target="_blank" href="https://github.com/gssetia" rel="noopener noreferrer">
							<img alt='GitHub Logo' height='60' width='60' src={github}></img>
							<div className='centerContract'>GitHub</div>
						</a>
					</div>
				</div>

				<div className='row justify-content-center largeSpace largerSpace'>
					<a href="mailto:gaurav.singh.setia@gmail.com">
						<button className="col-0 centerContract w3-button w3-black">Email Me</button>
					</a>
				</div>
			</div>
		);
	}
}
import React from 'react';

export default class Contact extends React.Component {

	constructor(){
	super();
	this.state= {

			};
			
		}
		
	render(){
		return(
				<div>
					<div className='contactContainer'>
					<h1 className ='contactTitle'> Reach out to me </h1>
        				<p className='contactContent'> Email: gaurav.singh.setia@gmail.com<br></br><br></br>
        				Linkedin: linkedin.com/in/gauravdeep-setia<br></br><br></br>
        				GitHub: github.com/gssetia</p>
        			</div>
				</div>

			);
	}
}
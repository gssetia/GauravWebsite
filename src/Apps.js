import React from 'react';
import logo from './Components/brainmapperlogo.png';
import rover from './Components/rover.jpg';
import flappybird from './Components/flappy.PNG';
import Game from './BrainMapper.js';
import Sportify from './Components/sportify.png';
import Rplace from './Components/rplace.png';
import URLshortener from './Components/urlshortener.jpeg';
import Speechsweep from './Components/speechsweep.png';

export default class Apps extends React.Component {
    constructor() {
        super();
        this.state = {
            progress: "0%",
            position: "fixed",
            display: "none",
        };
    }

    openNav = () => {
        this.setState({ progress: "100%" });
        setTimeout(() => {
            this.setState({ display: "initial" });
            this.setState({ position: "fixed" });
        }, 200);
    }

    closeNav = () => {
        this.setState({ progress: "0%" });
        this.setState({ position: "absolute" });
        this.setState({ display: "none" });
    }

    render() {
        return (
            <div>
                <div style={{ width: this.state.progress }} className="overlay">
                    <a href="#/" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <div className="overlay-content">
                        <Game display={this.state.display} position={this.state.position} />
                    </div>
                </div>

                <div className='row justify-content-center largerSpace'>
                    <h1 className='col-md-9 col-sm-12 space appTitle centerContact'> My Projects</h1>
                </div>

                <div className="row justify-content-center largeSpace largerSpace">
                    
                    <div className='col-md-5 col-sm-12 centerContact'>
                        <a onClick={this.openNav} className="w3-button">
                            <img alt='Brain Mapper' className='brainmapperlogo' src={logo}></img>
                        </a>
                    </div>

                    <div className='col-md-5 col-sm-12 centerContact'>
                        <ul className='projectDesc'>
                            <div className='projectTitle largeSpace'> Brain Mapper </div><br></br>
                            <div> My first personal Javascript project. Its a trivia game where you guess the country based on its outline. </div><br></br>
                            <div> The game data is stored on a PostgreSQL instance that is deployed by Railway.</div> <b> Click on the map to play! </b> 
                        </ul>
                    </div>
                </div>

                <div id = 'sweep' className="row justify-content-center largeSpace largerSpace">
                    
                    <div className='col-md-5 col-sm-12 centerContact'>
                        <a target="_blank" href='https://github.com/gssetia/speechsweep' rel="noopener noreferrer">
                            <img alt='speechsweep' className='speechsweep' src={Speechsweep}></img>
                        </a>
                    </div>

                    <div className='col-md-5 col-sm-12 centerContact'>
                        <ul className='projectDesc'>
                            <div className='projectTitle largeSpace'> SpeechSweep </div><br></br>
                            <div> The weekly lottery where one winner's submitted message is sent to all other participants as a notification. Currently in the process of being published to Google's Play Store. </div><br></br>
                            <div> Created using React Native with Firebase's backend cloud services. Realtime Database for storage, Play Integrity for OTP authentication and Cloud Functions for serving notifcations to participants. </div>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center largeSpace largerSpace">
                    
                    <div className='col-md-5 col-sm-12 centerContact'>
                        <a target="_blank" href='https://github.com/gssetia/r-place' rel="noopener noreferrer">
                            <img alt='rplace' className='brainmapperlogo' src={Rplace}></img>
                        </a>
                    </div>

                    <div className='col-md-5 col-sm-12 centerContact'>
                        <ul className='projectDesc'>
                            <div className='projectTitle largeSpace'> r/place Clone </div><br></br>
                            <div> We recreated Reddit's famous April Fools event called r/place where individuals around the world can contribute one pixel every 5 minutes onto a shared canvas.</div><br></br>
                            <div> Used 10 Amazon Web Services in conjunction to create an highly scalable and serverless application. Like the original implementation, your IP address is limited to one pixel per 5 minutes.  </div>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center largeSpace largerSpace">
                    
                    <div className='col-md-5 col-sm-12 centerContact'>
                        <a target="_blank" href='https://github.com/gssetia/URLShortener' rel="noopener noreferrer">
                            <img alt='URLshortener' className='sportify' src={URLshortener}></img>
                        </a>
                    </div>

                    <div className='col-md-5 col-sm-12 centerContact'>
                        <ul className='projectDesc'>
                            <div className='projectTitle largeSpace'> URL Shortener </div><br></br>
                            <div> Created an highly scalable URL shortening service which is able to store millions of key-pairs.  </div><br></br>
                            <div> The number of multi-threaded nodes running the Python/Flask application is scaled to guarantee availability and integrity. Takes advantage of the Cassandra architecture for persistence and a docker swarm of Redis nodes for caching. </div>
                            
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center largeSpace largerSpace">
                    
                    <div className='col-md-5 col-sm-12 centerContact'>
                        <a target="_blank" href='https://github.com/UTSCCSCC01/Sportify' rel="noopener noreferrer">
                            <img alt='Sportify' className='sportify' src={Sportify}></img>
                        </a>
                    </div>

                    <div className='col-md-5 col-sm-12 centerContact'>
                        <ul className='projectDesc'>
                            <div className='projectTitle largeSpace'> Sportify </div><br></br>
                            <div> Created an IOS & Android app for organizing spontaneous or planned student sporting events at UofT. </div><br></br>
                            <div> I worked with a team of 5 as part of Google's Developer Student Club. Users are authenticated using Firebase's Realtime Database integrated with UofT's Shibboleth authentication. </div>
                            
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center largerSpace largeSpace">
                    
                    <div className='col-md-5 col-sm-12 centerContact'>
                        <a target="_blank" href='https://devpost.com/software/rescue-rover' rel="noopener noreferrer">
                            <img alt='Rover' className='rover' src={rover}></img>
                        </a>
                    </div>
                    
                    <div className='col-md-5 col-sm-12 centerContact'>
                        <ul className='projectDesc'>
                            <div className='projectTitle roverSpace'> Rescue Rover </div><br></br>
                            <div> I participated at MakeUofT with 4 others to create this project.</div><br></br>
                            <div> This rover collects data of dangerous environments in order to help emergency crew to understand the full situation. The Rover collects raw data through sensors and sends it through the cloud. </div>
                        </ul>
                    </div>
                </div>

                <div className="row justify-content-center largerSpace largeSpace">
                    
                    <div className='col-md-5 col-sm-12 centerContact'>
                        <a target="_blank" href='https://github.com/gssetia/Flappybird-Assembly' rel="noopener noreferrer">
                            <img alt='Flappy Bird' className='flappy' src={flappybird}></img>
                        </a>
                    </div>

                    <div className='col-md-5 col-sm-12 centerContact'>
                        <ul className='projectDesc'>
                            <div className='projectTitle roverSpace'> Flappy Bird - Assembly </div><br></br>
                            <div> This is the classic Flappy Bird game while only using Assembly. Every pixel is accounted for. </div><br></br>
                            <div> Studying at the University of Toronto, you get many unique opportunities to grow. Coding in assembly taught me a lot about what really goes on in a computer. </div>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
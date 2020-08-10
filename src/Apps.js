import React from 'react';
import logo from './Components/brainmapperlogo.png';
import rover from './Components/rover.jpg';
import flappybird from './Components/flappy.PNG';
import Game from './BrainMapper.js'

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
                            <div> The game data is stored on a MySQL database server that is deployed by Heroku. </div>
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
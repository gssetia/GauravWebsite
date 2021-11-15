import React from 'react';
import Layout from './Layout';
import Header from './Header';
import './index.css';
import axios from 'axios';

// Importing all of the country outlines 
// and the country's respective flags (starts with F) from the src folder
import O1 from './Components/1.png';
import O2 from './Components/2.png';
import O3 from './Components/3.png';
import O4 from './Components/4.png';
import O5 from './Components/5.png';
import O6 from './Components/6.png';
import O7 from './Components/7.png';
import O8 from './Components/8.png';
import O9 from './Components/9.png';
import O10 from './Components/10.png';
import O11 from './Components/11.png';
import O12 from './Components/12.png';
import O13 from './Components/13.png';
import O14 from './Components/14.png';
import O15 from './Components/15.png';
import O16 from './Components/16.png';
import O17 from './Components/17.png';
import O18 from './Components/18.png';
import O19 from './Components/19.png';
import O20 from './Components/20.png';
import O21 from './Components/21.png';
import O22 from './Components/22.png';
import O23 from './Components/23.png';
import O24 from './Components/24.png';
import O25 from './Components/25.png';
import O26 from './Components/26.png';
import O27 from './Components/27.png';
import O28 from './Components/28.png';
import O29 from './Components/29.png';
import O30 from './Components/30.png';
import O31 from './Components/31.png';
import O32 from './Components/32.png';
import O33 from './Components/33.png';
import O34 from './Components/34.png';
import O35 from './Components/35.png';
import O36 from './Components/36.png';
import O37 from './Components/37.png';
import O38 from './Components/38.png';
import O39 from './Components/39.png';
import O40 from './Components/40.png';
import O41 from './Components/41.png';
import O42 from './Components/42.png';
import O43 from './Components/43.png';
import O44 from './Components/44.png';
import O45 from './Components/45.png';
import O46 from './Components/46.png';
import O47 from './Components/47.png';
import O48 from './Components/48.png';
import O49 from './Components/49.png';
import O50 from './Components/50.png';
import O51 from './Components/51.png';
import O52 from './Components/52.png';
import O53 from './Components/53.png';
import O54 from './Components/54.png';
import O55 from './Components/55.png';
import O56 from './Components/56.png';
import O57 from './Components/57.png';
import O58 from './Components/58.png';
import O59 from './Components/59.png';
import O60 from './Components/60.png';
import O61 from './Components/61.png';
import O62 from './Components/62.png';
import O63 from './Components/63.png';
import O64 from './Components/64.png';
import O65 from './Components/65.png';
import O66 from './Components/66.png';
import O67 from './Components/67.png';
import O68 from './Components/68.png';
import O69 from './Components/69.png';
import O70 from './Components/70.png';
import O71 from './Components/71.png';
import O72 from './Components/72.png';
import O73 from './Components/73.png';
import O74 from './Components/74.png';
import O75 from './Components/75.png';
import O76 from './Components/76.png';
import O77 from './Components/77.png';
import O78 from './Components/78.png';
import O79 from './Components/79.png';
import O80 from './Components/80.jpg';

import F1 from './Components/F1.png';
import F2 from './Components/F2.png';
import F3 from './Components/F3.png';
import F4 from './Components/F4.png';
import F5 from './Components/F5.png';
import F6 from './Components/F6.png';
import F7 from './Components/F7.png';
import F8 from './Components/F8.png';
import F9 from './Components/F9.png';
import F10 from './Components/F10.png';
import F11 from './Components/F11.png';
import F12 from './Components/F12.png';
import F13 from './Components/F13.png';
import F14 from './Components/F14.png';
import F15 from './Components/F15.png';
import F16 from './Components/F16.png';
import F17 from './Components/F17.png';
import F18 from './Components/F18.png';
import F19 from './Components/F19.png';
import F20 from './Components/F20.png';
import F21 from './Components/F21.png';
import F22 from './Components/F22.png';
import F23 from './Components/F23.png';
import F24 from './Components/F24.png';
import F25 from './Components/F25.png';
import F26 from './Components/F26.png';
import F27 from './Components/F27.png';
import F28 from './Components/F28.png';
import F29 from './Components/F29.png';
import F30 from './Components/F30.png';
import F31 from './Components/F31.png';
import F32 from './Components/F32.png';
import F33 from './Components/F33.png';
import F34 from './Components/F34.png';
import F35 from './Components/F35.png';
import F36 from './Components/F36.png';
import F37 from './Components/F37.png';
import F38 from './Components/F38.png';
import F39 from './Components/F39.png';
import F40 from './Components/F40.png';
import F41 from './Components/F41.png';
import F42 from './Components/F42.png';
import F43 from './Components/F43.png';
import F44 from './Components/F44.png';
import F45 from './Components/F45.png';
import F46 from './Components/F46.png';
import F47 from './Components/F47.png';
import F48 from './Components/F48.png';
import F49 from './Components/F49.png';
import F50 from './Components/F50.png';
import F51 from './Components/F51.png';
import F52 from './Components/F52.png';
import F53 from './Components/F53.png';
import F54 from './Components/F54.png';
import F55 from './Components/F55.png';
import F56 from './Components/F56.png';
import F57 from './Components/F57.png';
import F58 from './Components/F58.png';
import F59 from './Components/F59.png';
import F60 from './Components/F60.png';
import F61 from './Components/F61.png';
import F62 from './Components/F62.png';
import F63 from './Components/F63.png';
import F64 from './Components/F64.png';
import F65 from './Components/F65.png';
import F66 from './Components/F66.png';
import F67 from './Components/F67.png';
import F68 from './Components/F68.png';
import F69 from './Components/F69.png';
import F70 from './Components/F70.png';
import F71 from './Components/F71.png';
import F72 from './Components/F72.png';
import F73 from './Components/F73.png';
import F74 from './Components/F74.png';
import F75 from './Components/F75.png';
import F76 from './Components/F76.png';
import F77 from './Components/F77.png';
import F78 from './Components/F78.png';
import F79 from './Components/F79.png';
import F80 from './Components/F80.jpg';

import correctAudio from './Components/correct.mp3'
import incorrectAudio from './Components/wrong.wav'
import skipAudio from './Components/skip.wav'
import hintAudio from './Components/hint.wav'
import winnerAudio from './Components/finish.wav'

export default class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      reset: 'Start',   //used to change the header's text from start to reset
      rank: 0,          //keep track of the order of the countries
      hintTotal: 0,     //keep track of the total times the user used a hint
      skipTotal: 0,     //keep track of the total times the user skipped
      wrongTotal: 0,    //keep track of the total times the uder guessed wrong
      val: "",			     //value of the input
      shouldRender: false,
      hintText: null,   //text of the hint
      capitalText: null,//text of the capital hint
      muteText: "MUTE", //Mute text will change to 'unmute' when pressed
      mute: false,
      position: "fixed",
      countries: [],   //List that contains the data from the database
      points: 0,        //keep track of user's total points
      add: 4,           //keep track of potential points on right answer (lowers as you hint)
      flag: null,       //keep track of the flag for each respective country

      //Images = dictionary that holds the image data for the respective country 
      //Value = name of the country outline image
      //flag = name of the country flag image

      images: [
        { value: O1, flag: F1 },
        { value: O2, flag: F2 },
        { value: O3, flag: F3 },
        { value: O4, flag: F4 },
        { value: O5, flag: F5 },
        { value: O6, flag: F6 },
        { value: O7, flag: F7 },
        { value: O8, flag: F8 },
        { value: O9, flag: F9 },
        { value: O10, flag: F10 },
        { value: O11, flag: F11 },
        { value: O12, flag: F12 },
        { value: O13, flag: F13 },
        { value: O14, flag: F14 },
        { value: O15, flag: F15 },
        { value: O16, flag: F16 },
        { value: O17, flag: F17 },
        { value: O18, flag: F18 },
        { value: O19, flag: F19 },
        { value: O20, flag: F20 },
        { value: O21, flag: F21 },
        { value: O22, flag: F22 },
        { value: O23, flag: F23 },
        { value: O24, flag: F24 },
        { value: O25, flag: F25 },
        { value: O26, flag: F26 },
        { value: O27, flag: F27 },
        { value: O28, flag: F28 },
        { value: O29, flag: F29 },
        { value: O30, flag: F30 },
        { value: O31, flag: F31 },
        { value: O32, flag: F32 },
        { value: O33, flag: F33 },
        { value: O34, flag: F34 },
        { value: O35, flag: F35 },
        { value: O36, flag: F36 },
        { value: O37, flag: F37 },
        { value: O38, flag: F38 },
        { value: O39, flag: F39 },
        { value: O40, flag: F40 },
        { value: O41, flag: F41 },
        { value: O42, flag: F42 },
        { value: O43, flag: F43 },
        { value: O44, flag: F44 },
        { value: O45, flag: F45 },
        { value: O46, flag: F46 },
        { value: O47, flag: F47 },
        { value: O48, flag: F48 },
        { value: O49, flag: F49 },
        { value: O50, flag: F50 },
        { value: O51, flag: F51 },
        { value: O52, flag: F52 },
        { value: O53, flag: F53 },
        { value: O54, flag: F54 },
        { value: O55, flag: F55 },
        { value: O56, flag: F56 },
        { value: O57, flag: F57 },
        { value: O58, flag: F58 },
        { value: O59, flag: F59 },
        { value: O60, flag: F60 },
        { value: O61, flag: F61 },
        { value: O62, flag: F62 },
        { value: O63, flag: F63 },
        { value: O64, flag: F64 },
        { value: O65, flag: F65 },
        { value: O66, flag: F66 },
        { value: O67, flag: F67 },
        { value: O68, flag: F68 },
        { value: O69, flag: F69 },
        { value: O70, flag: F70 },
        { value: O71, flag: F71 },
        { value: O72, flag: F72 },
        { value: O73, flag: F73 },
        { value: O74, flag: F74 },
        { value: O75, flag: F75 },
        { value: O76, flag: F76 },
        { value: O77, flag: F77 },
        { value: O78, flag: F78 },
        { value: O79, flag: F79 },
        { value: O80, flag: F80 },
      ]
    };

    //Inherit methods and events
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onRules = this.onRules.bind(this)
    this.onGuess = this.onGuess.bind(this);
    this.onHint = this.onHint.bind(this);
    this.onSkip = this.onSkip.bind(this);
    this.onMute = this.onMute.bind(this);
    this.layoutElement = React.createRef();

  }

  // Load the game date from the heroku api when the page loads 
  componentDidMount = () => {
    axios.get("https://mysql-website.herokuapp.com/api/brainmapperdata")
    .then(response => {
      this.setState({ countries: response.data });
      console.log(response.data[0].alt[2], 'test');
    });
  };


  //HandleNext method used to save space, process the screen to the next country 

  handleNext() {
    this.setState({ hintText: "" });               //reset text hint to blank
    this.setState({ rank: this.state.rank + 1 });    //move to the next country
    this.setState({ flag: null });                 //reset flag hint to blank
    this.setState({ add: 4 });                     //reset potential points earned to default (4)
    this.setState({ capitalText: null });          //reset capital hint to blank
  }

  /*
    onHint method used to process 3 separate hints in order
    First hint: Text hint is shown to give some context to the country (hintText)
    Second hint: Flag of the country is shown (flag)
    Third hint: Capital city of the country is shown (capitalText)
    All hints lower the achievable point given by 1, from 4 to 1 (add)
    The total hints the user uses throughout the entire game is displayed on the left side (hintTotal)
  */
  onHint() {

    if (this.state.add === 4) {
      { this.state.mute === false ? this.handleAudio(hintAudio) : null };
      this.setState({ add: 3 });
      //this.setState({hintText:this.state.images[this.state.rank].hint});
      this.setState({ hintText: this.state.countries[this.state.rank].hint });
      this.setState({ hintTotal: this.state.hintTotal + 1 });
      { this.state.hintTotal === 0 ? this.setState({ hintS: "" }) : this.setState({ hintS: "s" }) };

    } else if (this.state.add === 3) {
      { this.state.mute === false ? this.handleAudio(hintAudio) : null };
      this.setState({ flag: this.state.images[this.state.rank].flag });
      this.setState({ add: 2 });
      this.setState({ hintTotal: this.state.hintTotal + 1 });
      { this.state.hintTotal === 0 ? this.setState({ hintS: "" }) : this.setState({ hintS: "s" }) };


    } else if (this.state.add === 2) {
      { this.state.mute === false ? this.handleAudio(hintAudio) : null };
      //this.setState({capitalText:this.state.images[this.state.rank].capital});
      this.setState({ capitalText: this.state.countries[this.state.rank].capital });
      this.setState({ add: 1 });
      this.setState({ hintTotal: this.state.hintTotal + 1 });
      { this.state.hintTotal === 0 ? this.setState({ hintS: "" }) : this.setState({ hintS: "s" }) };
    }
  }

  /*
    onSkip method is used when the user skips 
    handleNext method is used to process to the next country
    The total skips the user uses throughout the entire game is displayed on the left side (skipTotal)
  */
  onSkip() {
    if (this.state.rank !== 79) {
      if (this.state.rank === 78) {
        { this.state.mute === false ? this.handleAudio(winnerAudio) : null };
      } else {
        { this.state.mute === false ? this.handleAudio(skipAudio) : null };
      }
      this.handleNext();
      this.setState({ skipTotal: this.state.skipTotal + 1 });
      { this.state.skipTotal === 0 ? this.setState({ skipS: "" }) : this.setState({ skipS: "s" }) };
    }
  }

  //onRules method is used when the user wants to read the rules
  onRules() {
    this.setState({ reset: "Resume" });
    this.setState({ shouldRender: false });
    this.layoutElement.current.rulesShown();
  }

  /*
    onClick method is used when the user starts the game and when the user resets.
    every state is set to its default / null 
  */
  onClick() {
    this.setState({ reset: "Reset" });
    this.setState({ shouldRender: true });
    this.layoutElement.current.changeShown();
    if (this.state.reset === "Reset") {
      this.setState({ rank: 0 });
      this.setState({ capitalText: null });
      this.setState({ hintText: "" });
      this.setState({ points: 0 });
      this.setState({ flag: null });
      this.setState({ add: 4 });
      this.setState({ hintTotal: 0 });
      this.setState({ skipTotal: 0 });
      this.setState({ wrongTotal: 0 });
    }
  }

  /*
    onGuess method is used when the user enters an answer
    If the input is correct, then the handleNext method is used to process to the next country,
      then the total points is increased based on how many hints were used, from 4 to 1
    If the input is incorrect, then the total incorrect guesses increases by one 
    This can be seen on the left side of the screen
    If the user enters an input with no text (""), then nothing happens as no guess what made
    There is an commented piece of the 'else if' used for when the designer wants to scroll 
    through each country seamlessly 
  */
  onGuess() {
    if (this.state.rank !== 79) {
      //this.setState({rank:this.state.rank+1});

      //if(document.getElementById("input").value.trim().toLowerCase() === this.state.images[this.state.rank].id){
      var guess = document.getElementById("input").value.trim().toLowerCase();
      
      console.log(this.state.rank);
      console.log(this.state.countries);
      if ((guess !== "") && (guess === this.state.countries[this.state.rank].name || guess === this.state.countries[this.state.rank].alt)) {

        this.setState({ points: this.state.points + this.state.add });

        if (this.state.rank === 78) {
          
          { this.state.mute === true ? this.handleAudio(winnerAudio) : null };
          
        } else {
          { this.state.mute === false ? this.handleAudio(correctAudio) : null };
        }
        this.handleNext();

      } else if (document.getElementById("input").value.replace(/ /g, '') !== "") {
        this.setState({ wrongTotal: this.state.wrongTotal + 1 });
        { this.state.mute === false ? this.handleAudio(incorrectAudio) : null }
      }
    }
  }

  onMute() {
    if (this.state.mute === true) {
      this.setState({ mute: false });
      this.setState({ muteText: 'MUTE' })
    } else {
      this.setState({ mute: true });
      this.setState({ muteText: 'UNMUTE' })
    }
  }

  handleChange(event) {
    this.setState({ val: event.target.value });
  }

  handleSubmit(event) {
    this.onGuess();
    this.setState({ val: "" });
    event.preventDefault();
  }

  handleAudio(audioFile) {
    let audio = new Audio(audioFile);
    audio.play();
  }

  render() {
    return (

      <div className='container-fluid'>

        <Layout
          ref={this.layoutElement}
          reset={this.state.reset}
          onClick={this.onClick}
          onRules={this.onRules}
        />

        {this.state.shouldRender ?
          <Header
            display={this.props.display}
            position={this.props.position}
            onMute={this.onMute}
            muteText={this.state.muteText}
            capitalText={this.state.capitalText}
            wrongTotal={this.state.wrongTotal}
            skipTotal={this.state.skipTotal}
            hintTotal={this.state.hintTotal}
            onSkip={this.onSkip}
            title={this.state.title}
            flag={this.state.flag}
            points={this.state.points}
            onHint={this.onHint}
            hintText={this.state.hintText}
            val={this.state.val}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            onGuess={this.onGuess}
            images={this.state.images}
            rank={this.state.rank}
          /> : null}

      </div>
    );
  }
}


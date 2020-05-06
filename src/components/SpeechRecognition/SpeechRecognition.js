import React, { Component } from "react";

//Connect to the redux store
import { connect } from 'react-redux';

//used to help change pages
import { withRouter } from 'react-router-dom';

//Speech to Text API
import SpeechRecognition from "react-speech-recognition";

//Import the components to be used on this page
import Scroll from '../Scroll/Scroll';

class Dictaphone extends Component {
  state = {
      secondsElapsed: 0
  }
  timeout = 0;

  //Stopwatch Methods
  //Method to get seconds on DOM
  getSeconds = () => {
      return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }

  //Method to get minutes on the DOM
  getMinutes = () => {
      return Math.floor(this.state.secondsElapsed / 60);
  }

  //Method to start the timer and set it to state
  handleStartClick = () => {
      let _this = this;

      this.incrementer =  setInterval(function() {
          _this.setState({
              secondsElapsed: (_this.state.secondsElapsed + 1),
          });
      }, 1000);
  }

  //Method to clear the timer interval
  handleStopClick = () => {
      clearInterval(this.incrementer);
  }

  //Method for sending the transcript of recorded text into redux state
  updateTranscriptState = () => {
    this.props.dispatch({type: 'SET_SPEECH_TEXT', payload: {speech_text: this.props.transcript}});
  }

  //Method to go back to user's home screen
  //Sets the transcript back to nothing
  stopPresenting = () => {
    this.props.dispatch({type: 'SET_SPEECH_TEXT', payload: {speech_text: ''}});
    this.props.history.push(`/`);
  }
  
  stopEvent = () => {
    //Stop the timer 
    this.handleStopClick();
    //Stop the microphone when paused but keep the transcript
    setTimeout(() => {this.props.stopListening(); }, 1000);
    //Clear the setInterval so it does not keep running when paused
    clearInterval(this.timeout);
  }

  //Click event for when the record button is pushed
  handleRecordClick = () => {
    //Start the timer
    this.handleStartClick();
    //Start the microphone
    this.props.startListening();
    //Start the updating the transcript to redux state
    this.timeout = setInterval(() => {this.updateTranscriptState();}, 1000);
  }

  //Click event for when the speech is paused
  handlePauseClick = () => {
    this.stopEvent();
  }

  //Click event for when the speech is submitted and finished
  handleSubmitTranscriptClick = () => {
    this.stopEvent();
    //Update the transcript before submitting and going to review page
    this.updateTranscriptState();
    //Reset the transcript back to empty string
    this.props.resetTranscript();
    //Send time to redux state to be used on review page
    this.props.dispatch({type: 'SET_TIME', payload: {time: this.state.secondsElapsed}});
    //Go to the review page need setTimeout to not get memory leak error ???
    setTimeout(() => {this.props.history.push(`/review`); }, 1500);
  }

  //Click event for when the speech is canceled
  handleCancelSpeechClick = () => {
    this.stopEvent();
    //Reset the transcript back to empty string
    setTimeout(() => {this.props.resetTranscript(); }, 1500);
    //Reset redux state for transcript back to empty and go back to user's home page
    setTimeout(() => {this.stopPresenting(); }, 1500);
  }

  render() {
    return (
      <div>
        <div className='top-heading'>

          <h3>Speech Controls</h3>
          <h4 className="timer">{this.getMinutes()}:{this.getSeconds()}</h4>
          <button onClick={this.handleRecordClick}>
              Record <i className="fa fa-microphone" aria-hidden="true"></i>
          </button>

          <button onClick={this.handlePauseClick}>
              Pause <i className="fa fa-pause" aria-hidden="true"></i>
          </button>

          <button onClick={this.handleSubmitTranscriptClick}>
              Submit Speech Content <i className="fa fa-list" aria-hidden="true"></i>
          </button>

          <button onClick={this.handleCancelSpeechClick}>
              Cancel Speech <i className="fa fa-times-circle" aria-hidden="true"></i>
          </button>

        </div>
        <Scroll>
          <span>{this.props.transcript}</span>
        </Scroll>
      </div>
    );
  }
};

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(withRouter(connect()(Dictaphone)));
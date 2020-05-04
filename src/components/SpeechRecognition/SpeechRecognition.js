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
  timeout = 0;
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

  render() {
    return (
      <div>
        {/* Starts the microphone to record the speech */}
        <button onClick={() => {
          this.props.startListening()
          this.timeout = setInterval(() => {this.updateTranscriptState();}, 5000);}}>
            Record <i className="fa fa-microphone" aria-hidden="true"></i>
        </button>

        {/* Stops the recording but does not reset transcript */}
        <button onClick={() => {
          this.props.stopListening();
          clearInterval(this.timeout);}}>
            Pause <i className="fa fa-pause" aria-hidden="true"></i>
        </button>

        {/* 
          Stops the microphone from recording
          sends the transcript into redux state
        */}
        <button onClick={() => {
          this.props.stopListening();
          clearInterval(this.timeout); 
          this.updateTranscriptState();}}>
            Submit Speech Content <i className="fa fa-list" aria-hidden="true"></i>
        </button>

        {/* 
          Stops the microphone from recording
          reset the transcript from the api
          goes back to home screen
          setTimeouts delay so the mic will stop recording before going
          back to the home page
        */}
        <button onClick={() => {
          this.props.stopListening();
          clearInterval(this.timeout);
          setTimeout(() => {this.props.resetTranscript(); }, 1500); 
          setTimeout(() => {this.stopPresenting(); }, 1500);}}>
            Cancel Speech <i className="fa fa-times-circle" aria-hidden="true"></i>
        </button>
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
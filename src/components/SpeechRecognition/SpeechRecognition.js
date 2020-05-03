import React, { Component } from "react";

//Connect to the redux store
import { connect } from 'react-redux';

//used to help change pages
import { withRouter } from 'react-router-dom';

import SpeechRecognition from "react-speech-recognition";
class Dictaphone extends Component {
  updateTranscriptState = () => {
    this.props.dispatch({type: 'SET_SPEECH_TEXT', payload: {speech_text: this.props.transcript}});
  }

  //Method to go back to user's home screen
  stopPresenting = () => {
    this.props.dispatch({type: 'SET_SPEECH_TEXT', payload: {speech_text: ''}});
    this.props.history.push(`/`);
  } 

  render() {
    return (
      <div>
        {/* 
          Stops the microphone from recording
          reset the transcript from the api
          goes back to home screen
        */}
        <button onClick={() => {
          this.props.stopListening();
          this.props.resetTranscript(); 
          this.stopPresenting();}}>
            Cancel Speech
        </button>

        {/* 
          Stops the microphone from recording
          sends the transcript into redux state
        */}
        <button onClick={() => {
          this.props.stopListening(); 
          this.updateTranscriptState();}}>
            Submit Speech Content
        </button>
        
        {/* Stops the recording but does not reset transcript */}
        <button onClick={this.props.stopListening}>Pause</button>

        
        <button onClick={this.props.startListening}>Start</button>
        <span>{this.props.transcript}</span>
      </div>
    );
  }
};

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(withRouter(connect()(Dictaphone)));
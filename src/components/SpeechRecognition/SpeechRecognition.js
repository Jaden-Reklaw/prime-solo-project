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

  //Click event for when the record button is pushed
  handleRecordClick = () => {
    //Start the microphone
    this.props.startListening();
    //Start the updating the transcript to redux state
    this.timeout = setInterval(() => {this.updateTranscriptState();}, 5000);
  }

  //Click event for when the speech is paused
  handlePauseClick = () => {
    //Stop the microphone when paused but keep the transcript
    this.props.stopListening();
    //Clear the setInterval so it does not keep running when paused
    clearInterval(this.timeout);
  }

  //Click event for when the speech is submitted and finished
  handleSubmitTranscriptClick = () => {
    //Stop the microphone when paused but keep the transcript
    this.props.stopListening();
    //Clear the setInterval so it does not keep running when paused
    clearInterval(this.timeout);
    //Update the transcript before submitting and going to review page
    this.updateTranscriptState();
  }

  //Click event for when the speech is canceled
  handleCancelSpeechClick = () => {
    //Stop the microphone when paused but keep the transcript
    this.props.stopListening();
    //Clear the setInterval so it does not keep running when paused
    clearInterval(this.timeout);
    //Reset the transcript back to empty string
    setTimeout(() => {this.props.resetTranscript(); }, 1500);
    //Reset redux state for transcript back to empty and go back
    //to user's home page
    setTimeout(() => {this.stopPresenting(); }, 1500);
  }

  render() {
    return (
      <div>
        <div className='top-heading'>

          <h3>Speech Controls</h3>
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
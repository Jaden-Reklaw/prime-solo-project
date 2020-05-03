import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

//Import components to be used on this page
import SpeechContent from '../SpeechContent/SpeechContent';

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({transcript,browserSupportsSpeechRecognition, stopListening, startListening}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <button onClick={startListening}>Start Recording <i className="fa fa-microphone" aria-hidden="true"></i></button>
      <button onClick={stopListening}>Stop Recording <i className="fa fa-stop" aria-hidden="true"></i></button>
      <SpeechContent content={transcript}/>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

const options = {
    autoStart: false
}

export default SpeechRecognition(options)(Dictaphone);
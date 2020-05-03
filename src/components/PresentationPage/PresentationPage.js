import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//import specific components that work on this page
import SpeechRecognition from '../SpeechRecognition/SpeechRecognition';

//import styles
import './PresentationPage.css';

class PresentationPage extends Component {
    componentDidMount() {
        this.getSpeechById();
    }

    //Get the speech from the database and set to redux state
    getSpeechById = () => {
        //Looking for query string to get id of movie
        console.log(this.props.location.search);
        let querystring = this.props.location.search;

        //Removing extra part of the path
        let speech_id = querystring.replace('?q=', '');
        console.log('speech id is:', speech_id);

        //Dispatch to Saga
        this.props.dispatch({type: 'FETCH_SPEECH_BY_ID', payload: speech_id});
    }

    //Method to go back to user's home screen
    stopPresenting = () => {
        this.props.history.push(`/`);
    }

    render() {
        console.log(this.props.speech.notes);
        return (
            <div>
                <h1>Presentation Page</h1>
                <section className="container">
                    <div>
                        <h3>Like and And counter here</h3>
                    </div>
                    <div>
                        <h3>What you say will be recorded here.</h3>
                        <SpeechRecognition />
                    </div>
                    <div>
                        <h3>Speech Notes:</h3>
                        <pre>{this.props.speech.notes}</pre>
                    </div>
                </section>
                <button onClick={this.stopPresenting}>Cancel Speech</button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    speech: reduxState.speech
  });
  
  export default connect(mapStateToProps)(PresentationPage);
  
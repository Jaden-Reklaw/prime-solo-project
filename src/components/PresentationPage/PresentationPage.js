import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//import specific components that work on this page
import SpeechRecognition from '../SpeechRecognition/SpeechRecognition';
import Scroll from '../Scroll/Scroll';

//import styles
import './PresentationPage.css';

class PresentationPage extends Component {
    componentDidMount() {
        this.getSpeechById();
    }

    //Get the speech from the database and set to redux state
    getSpeechById = () => {
        //Looking for query string to get id of movie
        let querystring = this.props.location.search;

        //Removing extra part of the path
        let speech_id = querystring.replace('?q=', '');

        //Dispatch to Saga
        this.props.dispatch({type: 'FETCH_SPEECH_BY_ID', payload: speech_id});
    }

    render() {
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
                        <Scroll>
                            <pre>{this.props.speech.notes}</pre>
                        </Scroll>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    speech: reduxState.speech
  });
  
  export default connect(mapStateToProps)(PresentationPage);
  
import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//import specific components that work on this page
import SpeechRecognition from '../SpeechRecognition/SpeechRecognition';
import Scroll from '../Scroll/Scroll';
import WordCounter from '../WordCounter/WordCounter';

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
            <div className="presentation-page">
                <h1>Speaker: {this.props.user.first_name}</h1>
                <h2>Title: {this.props.speech.speech_title}</h2>
                <section className="presentation-wrapper">
                    <div>
                        <div className='top-heading'>
                            <h3>Like and And counter here</h3>
                        </div>
                        <Scroll>
                            <WordCounter />
                        </Scroll>
                    </div>
                    <div>
                        <SpeechRecognition />
                    </div>
                    <div>
                        <div className='top-heading'>
                            <h3>Speech Notes:</h3>
                        </div>
                        <Scroll>
                            <pre className="notes-section">{this.props.speech.notes}</pre>
                        </Scroll>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    speech: reduxState.speech,
    user: reduxState.user
  });
  
  export default connect(mapStateToProps)(PresentationPage);
  
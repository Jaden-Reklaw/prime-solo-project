import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

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
        return (
            <div>
                <h1>Presentation Page</h1>
                <button onClick={this.stopPresenting}>Cancel Speech</button>
                <button onClick={this.submitSpeech}>Submit Speech</button>
            </div>
        );
    }
}
  
  export default connect()(PresentationPage);
  
import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//used to help change pages
import { withRouter } from 'react-router-dom';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class DetailsPage extends Component {
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

  render () {
    return (
      <div>
        <Nav />
        <h1>Details Page</h1>
        <Footer />
      </div>
    );
  }

}

//Set props to this component from redux store
const mapStateToProps = reduxState => ({
  user_id: reduxState.user,
  speeches: reduxState.finisheSpeech
});

export default withRouter(connect(mapStateToProps)(DetailsPage));
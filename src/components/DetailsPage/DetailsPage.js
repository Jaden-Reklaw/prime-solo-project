import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//used to help change pages
import { withRouter } from 'react-router-dom';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Scroll from '../Scroll/Scroll2';

class DetailsPage extends Component {
    componentDidMount() {
        this.getSpeechById();
    }

  //Method to get seconds on DOM
    getSeconds = () => {
    return ('0' + this.props.speech.speech_rt % 60).slice(-2);
  }

  //Method to get minutes on the DOM
    getMinutes = () => {
    return Math.floor(this.props.speech.speech_rt / 60);  
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
        <Scroll>
            <section>
                <h3>Speech Title</h3>
                <h4>{this.props.speech.speech_title}</h4>
                <h3>Speech Type</h3>
                <h4>{this.props.speech.speech_type}</h4>
            </section>
            <section>
                <h3>Speech Content</h3>
                <p>{this.props.speech.speech_text}</p>
            </section>
            <section>
                <h3>Speech Notes</h3>
                <pre>{this.props.speech.notes}</pre>
            </section>
            <section>
                <h3>Speech Table Topics</h3>
                <pre>{this.props.speech.table_topics}</pre>
            </section>
            <section>
                <h3>Speech Evaluation</h3>
                <pre>{this.props.speech.speech_eval}</pre>
            </section>
            <section>
                <h3>Speech Word Count</h3>
                <h4>Ands: {this.props.speech.and_count}</h4>
                <h4>Likes: {this.props.speech.like_count}</h4>
            </section>
            <section>
              <h3>Time</h3>
              <h4>Min:Sec = {this.getMinutes()}:{this.getSeconds()}</h4>
              <h3>In Time?</h3>
              {this.props.speech.in_time ? <h4>Yes</h4> : <h4>No</h4>}
            </section>
        </Scroll>
        
        <Footer />
      </div>
    );
  }

}

//Set props to this component from redux store
const mapStateToProps = reduxState => ({
  user_id: reduxState.user,
  speech: reduxState.speech
});

export default withRouter(connect(mapStateToProps)(DetailsPage));
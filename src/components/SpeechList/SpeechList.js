import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//used to help change pages
import { withRouter } from 'react-router-dom';

//Import other components here
import AddNotes from '../Buttons/AddNotes';
import AddTableTopics from '../Buttons/AddTableTopics';
import DeleteSpeech from '../Buttons/DeleteSpeech';
import SpeechType from '../Buttons/SpeechType';

//Get redux store
const mapStateToProps = reduxState => ({
    user: reduxState.user,
    speeches: reduxState.speeches
});

class SpeechList extends Component {
    componentDidMount() {
      // use component did mount to dispatch an action to request the speechList from the API
      this.props.dispatch({type: 'FETCH_SPEECH', payload: this.props.user.id});
    }

    handleClick = (event, speech_id) => {
      this.props.history.push(`/presentation`);
    }

  render() {
    return (
      <tbody>
        {this.props.speeches.map((speech) => {
          return(
            <tr key={speech.id}>
              <td>{speech.speech_title}</td>
              <td>{speech.date_created}</td>
              <td><AddNotes 
                notes={speech.notes} 
                speech_id={speech.id}
                user_id={speech.user_id}/>
              </td>
              <td><AddTableTopics 
                table_topics={speech.table_topics} 
                speech_id={speech.id}
                user_id={speech.user_id}/>
              </td>
              <td>
                <SpeechType 
                speech_type={speech.speech_type}
                speech_id={speech.id}
                user_id={speech.user_id}/>
              </td>
              <td>{speech.min_time} to {speech.max_time}</td>
              <td><button onClick={() => this.handleClick(speech.id)}>Start Presentation</button></td>
              <td><DeleteSpeech 
              speech_id={speech.id}
              user_id={speech.user_id}/>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default withRouter(connect(mapStateToProps)(SpeechList));
import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//Import other components here
import AddNotes from '../Buttons/AddNotes';

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

  render() {
    console.log('redux state',this.props.speeches);
    return (
      <tbody>
        {this.props.speeches.map((speech) => {
          return(
            <tr key={speech.id}>
              <td>{speech.speech_title}</td>
              <td>{speech.date_created}</td>
              <td><AddNotes notes={speech.notes} speech_id={speech.id}/></td>
              <td><button onClick={this.handleClick}>Add Table Topics</button></td>
              <td>
              <select id="speech_type">
                <option value="debate">Debate</option>
                <option value="demonstrative">Demonstrative</option>
                <option value="entertaining">Entertaining</option>
                <option value="informative">Informative</option>
                <option value="impromptu">Impromptu</option>
                <option value="motivational">Motivational</option>
                <option value="passion">Passion</option>
                <option value="persuasive">Persuasive</option>
                <option value="special_occasion">Special Occasion</option>
              </select>
              </td>
              <td>{speech.min_time} to {speech.max_time}</td>
              <td><button>Start Presentation</button></td>
              <td><button><i className="fa fa-trash-o"></i></button></td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}

export default connect(mapStateToProps)(SpeechList);
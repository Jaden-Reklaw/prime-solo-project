import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

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
              <td><button>Add Notes</button></td>
              <td><button>Add Table Topics</button></td>
              <td>
              <select id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
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
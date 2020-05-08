import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import DeleteSpeech from '../Buttons/DeleteSpeech';

class HistoryPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_FINISHED_SPEECHES', payload: this.props.user_id});
  }

  render () {
    return (
      <div>
        <Nav />
        <h1>Speech History</h1>
        <table className="history-table">
          <thead>
            <tr>
              <th>Speech Name</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.speeches.map((speech) => {
              return(
                <tr key={speech.id}>
                  <td>{speech.speech_title}</td>
                  <td><button>View Details</button></td>
                  <td><DeleteSpeech speech_id={speech.id} user_id={speech.user_id}/></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Footer />
      </div>
    );
  }

}

//Set props to this component from redux store
const mapStateToProps = reduxState => ({
  user_id: reduxState.user.id,
  speeches: reduxState.finisheSpeech
});

export default connect(mapStateToProps)(HistoryPage);

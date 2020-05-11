import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//used to help change pages
import { withRouter } from 'react-router-dom';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import DeleteSpeech from '../Buttons/DeleteSpeech';

class HistoryPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_FINISHED_SPEECHES', payload: this.props.user_id});
  }

  viewDetails = (speech_id) => {
    this.props.history.push(`/details?q=${speech_id}`);
  }

  render () {
    return (
      <div>
        <Nav />
        <section>
          <h1>Speech History</h1>
          <table className="primeTable">
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
                    <td><button className="button center" onClick={() => this.viewDetails(speech.id)}>View Details</button></td>
                    <td><DeleteSpeech speech_id={speech.id} user_id={speech.user_id}/></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
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

export default withRouter(connect(mapStateToProps)(HistoryPage));

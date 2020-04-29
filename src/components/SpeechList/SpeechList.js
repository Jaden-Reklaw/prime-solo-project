import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//Get redux store
const mapStateToProps = reduxState => ({
    user: reduxState.user,
});

class SpeechList extends Component {
    componentDidMount() {
      // use component did mount to dispatch an action to request the plantList from the API
      this.props.dispatch({type: 'FETCH_SPEECH', payload: this.props.user.id});
    }

  render() {
    return (
      <tr></tr>
    );
  }
}

export default connect(mapStateToProps)(SpeechList);
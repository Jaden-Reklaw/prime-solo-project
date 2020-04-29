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
      <tr></tr>
    );
  }
}

export default connect(mapStateToProps)(SpeechList);
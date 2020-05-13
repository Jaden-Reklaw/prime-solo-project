import React, {Component} from 'react'
import { connect } from 'react-redux';

class DeleteSpeech extends Component {
  handleDelete = () => {
    //Sends dispatch to deleteSpeechSaga to remove the speech once the trash can button is pushed
    this.props.dispatch({type: 'DELETE_SPEECH', payload: {speech_id:this.props.speech_id, user_id: this.props.user_id}});
  }

  render() {
    return (
      <button
      className="button center" 
      onClick={this.handleDelete}><i className="fa fa-trash-o"></i></button>
    );
  }
}


export default connect()(DeleteSpeech);
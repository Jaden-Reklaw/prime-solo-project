import React, {Component} from 'react'
import { connect } from 'react-redux';
import './modal.css';


class CreateSpeech extends Component {
  state = {
    isOpen: false,
    newSpeech: {
        speech_title: '',
        min_time: '',
        max_time: '',
    }
  }

  setIsOpen = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
        newSpeech: {...this.state.newSpeech,[propertyName]: event.target.value,}
      });
  }

  handleSubmit = () => {
    //Sends a dispatch to update the notes that were added.
    //this.props.dispatch({type: 'PUT_NOTES', payload: {id:this.props.speech_id, notes: this.state.notes, user_id: this.props.user_id}});
    //Closes the modal once you hit save;
    this.setIsOpen();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setIsOpen()}>Add Notes</button>
        {this.state.isOpen ? (
          <div className="modal">
            <div className="modal_content">
              <h2>Create New Speech</h2>
              <hr />
              <form>
                <label for="speech_title">Speech Title</label>
                <input value={this.state.newSpeech.speech_title} onChange={(event) => this.handleChangeFor(event, 'speech_title')}/>
                <label for="min_time">Speech Title</label>
                <input value={this.state.newSpeech.min_time} onChange={(event) => this.handleChangeFor(event, 'speech_title')}/>
                <input value={this.state.newSpeech.max_time} onChange={(event) => this.handleChangeFor(event, 'speech_title')}/>
              </form>
              <button onClick={this.handleSubmit}>Save</button>
              <button onClick={() => this.setIsOpen()}>Cancel</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}


export default connect()(CreateSpeech);
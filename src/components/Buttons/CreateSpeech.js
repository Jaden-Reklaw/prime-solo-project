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
    //Sends a dispatch to post a new speech.
    this.props.dispatch({type: 'POST_SPEECH', payload: {newSpeech: this.state.newSpeech, user_id: this.props.user_id}});

    //Reset state to empty strings
    this.setState({newSpeech: {
        speech_title: '',
        min_time: '',
        max_time: '',
    }});

    //Closes the modal once you hit save;
    this.setIsOpen();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setIsOpen()}>Create New Speech</button>
        {this.state.isOpen ? (
          <div className="modal">
            <div className="modal_content">
              <h1>Create New Speech</h1>
              <hr />
              <form>
                <label htmlFor="speech_title">Speech Title:</label>
                <input 
                    type="text"
                    value={this.state.newSpeech.speech_title} 
                    onChange={(event) => this.handleChangeFor(event, 'speech_title')}/>
                <label htmlFor="min_time">Minimal Speech Time:</label>
                <input 
                    type="number"
                    value={this.state.newSpeech.min_time} 
                    onChange={(event) => this.handleChangeFor(event, 'min_time')}/>
                <label htmlFor="max_time">Maximum Speech Time:</label>
                <input
                    type="number" 
                    value={this.state.newSpeech.max_time} 
                    onChange={(event) => this.handleChangeFor(event, 'max_time')}/>
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
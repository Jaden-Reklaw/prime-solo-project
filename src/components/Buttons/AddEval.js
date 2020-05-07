import React, {Component} from 'react'
import { connect } from 'react-redux';
import './modal.css';


class AddEval extends Component {
  state = {
    isOpen: false,
    speech_eval: this.props.speech_eval
  }

  setIsOpen = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleChangeFor = (event) => {
      this.setState({
        speech_eval: event.target.value
      });
  }

  handleSubmit = () => {
    //Sends a dispatch to update the speech_eval that were added.
    this.props.dispatch({type: 'SET_EVAL', payload: {id:this.props.speech_id, speech_eval: this.state.speech_eval, user_id: this.props.user_id}});
    //Closes the modal once you hit save;
    this.setIsOpen();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setIsOpen()}>Add Evaluation</button>
        {this.state.isOpen ? (
          <div className="modal">
            <div className="modal_content">
              <h2>Speech Evaluation</h2>
              <hr />
              <article>
                  <textarea 
                  spellCheck="true"
                  value={this.state.speech_eval || ''} 
                  onChange={(event) => this.handleChangeFor(event)}></textarea>
              </article>
              <button onClick={this.handleSubmit}>Save</button>
              <button onClick={() => this.setIsOpen()}>Cancel</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect()(AddEval);
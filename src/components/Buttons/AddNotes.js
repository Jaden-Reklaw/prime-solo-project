import React, {Component} from 'react'
import { connect } from 'react-redux';
import './modal.css';


class AddNotes extends Component {
  state = {
    isOpen: false,
    notes: this.props.notes
  }

  setIsOpen = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleChangeFor = (event) => {
      this.setState({
        notes: event.target.value
      });
  }

  handleSubmit = () => {
    //Sends a dispatch to update the notes that were added.
    this.props.dispatch({type: 'PUT_NOTES', payload: {id:this.props.speech_id, notes: this.state.notes, user_id: this.props.user_id}});
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
              <h2>Notes</h2>
              <hr />
              <article>
                  <textarea 
                  spellCheck="true"
                  value={this.state.notes || ''} 
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


export default connect()(AddNotes);
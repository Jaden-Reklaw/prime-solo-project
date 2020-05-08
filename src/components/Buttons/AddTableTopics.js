import React, {Component} from 'react'
import { connect } from 'react-redux';
import './modal.css';


class AddTableTopics extends Component {
  state = {
    isOpen: false,
    table_topics: this.props.table_topics
  }

  setIsOpen = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleChangeFor = (event) => {
      this.setState({
        table_topics: event.target.value
      });
  }

  handleSubmit = () => {
    //Sends a dispatch to update the table topics that were added.
    this.props.dispatch({type: 'PUT_TABLE_TOPICS', payload: {id:this.props.speech_id, table_topics: this.state.table_topics, user_id: this.props.user_id}});
    //Closes the modal once you hit save;
    this.setIsOpen();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setIsOpen()}>Add Table Topics</button>
        {this.state.isOpen ? (
          <div className="modal">
            <div className="modal_content">
              <h1>Table Topics</h1>
              <hr />
              <article>
                  <textarea 
                  spellCheck="true"
                  value={this.state.table_topics || ''} 
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


export default connect()(AddTableTopics);
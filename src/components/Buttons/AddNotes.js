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
                  <textarea value={this.state.notes} onChange={(event) => this.handleChangeFor(event)}></textarea>
              </article>
              <button onClick={}>Save</button>
              <button onClick={() => this.setIsOpen()}>Cancel</button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

//Get redux store
const mapStateToProps = reduxState => ({
    speeches: reduxState.speeches
});


export default connect(mapStateToProps)(AddNotes);
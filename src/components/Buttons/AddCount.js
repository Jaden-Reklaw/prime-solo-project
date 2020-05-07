import React, {Component} from 'react'
import { connect } from 'react-redux';
import './modal.css';


class AddCount extends Component {
  state = {
    isOpen: false,
    counts: {
        likes: this.props.wordCount.likes,
        ands: this.props.wordCount.ands,
    }
  }

  setIsOpen = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
        counts: {...this.state.counts,[propertyName]: event.target.value,}
      });
  }

  handleSubmit = () => {
    //Sends a dispatch to post a new speech.
    this.props.dispatch({type: 'SET_WORD_COUNTS', payload: {likes: this.state.counts.likes, ands: this.state.counts.ands}});
    //Closes the modal once you hit save;
    this.setIsOpen();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setIsOpen()}>Change Counts</button>
        {this.state.isOpen ? (
          <div className="modal">
            <div className="modal_content">
              <h2>Change Counts</h2>
              <hr />
              <form>
                <label htmlFor="likes">Likes Count:</label>
                <input 
                    type="number"
                    value={this.state.counts.likes} 
                    onChange={(event) => this.handleChangeFor(event, 'likes')}/>
                <label htmlFor="ands">Ands Count:</label>
                <input
                    type="number" 
                    value={this.state.counts.ands} 
                    onChange={(event) => this.handleChangeFor(event, 'ands')}/>
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

const mapStateToProps = reduxState => ({
    wordCount: reduxState.wordCount,
});
export default connect(mapStateToProps)(AddCount);
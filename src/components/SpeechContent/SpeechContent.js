import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

class SpeechContent extends Component {
    state = {
        content: ''
    }
    submitTranscript = () => {
        this.setState({content: this.props.content});
    }
    
    render() {    
        return (
            <div>
                <p>{this.props.content}</p>
                <button onClick={this.submitTranscript}>Submit</button>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default connect()(SpeechContent);
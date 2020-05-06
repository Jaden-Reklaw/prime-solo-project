import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

class WordCounter extends Component {
    //Create local state to store ands and likes
    state = {
        likes: 0,
        ands: 0
    }

    //How to fix the issue if you get the infinite loop issue
    //with setting state
    componentDidUpdate(prevProps) {
        if(this.props.speechText !== prevProps.speechText) {
            this.updateLike();
            this.updateAnd();
            this.props.dispatch({type: 'SET_WORD_COUNTS', payload: this.state});
        } 
    }

    updateLike = () => {
        if(typeof this.props.speechText === 'string') {
            const words = this.props.speechText.split(' ');
            let count = words.filter((word) => word === 'like');
            this.setState({likes: count.length});
        }
    }

    updateAnd = () => {
        if(typeof this.props.speechText === 'string') {
            const words = this.props.speechText.split(' ');
            let count = words.filter((word) => word === 'and');
            this.setState({ands: count.length});
        }
    }

    render () {
        return (
            <div>
                <h4>Likes: {this.state.likes}</h4>
                <h4>Ands: {this.state.ands}</h4>
            </div>
        );
    }
}

//Get redux state added to props for speechText
const mapStateToProps = reduxState => ({
    speechText: reduxState.speechText.speech_text,
});

export default connect(mapStateToProps)(WordCounter);
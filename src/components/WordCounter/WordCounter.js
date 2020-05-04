import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

class WordCounter extends Component {
    //Create local state to store ands and likes
    state = {
        likes: 0,
        ands: 0
    }

    componentDidUpdate() {
        this.updateLike();
    }

    updateLike = () => {
        console.log('speechText is',this.props.speechText);
        if(typeof this.props.speechText === 'string') {
            const words = this.props.speechText.split(' ');
            console.log('Words are', words);
            let count = words.filter((word) => word === 'like');
            console.log('Number of times you said like', count.length);
            //this.setState({likes: count.length});
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
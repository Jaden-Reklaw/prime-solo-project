import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

class HistoryPage extends Component {
    render () {
        return (
            <>
                <div>
                    <h1>Review: {this.props.speech.speech_title}</h1>
                </div>
                <section>
                    <h2>Speech Content</h2>
                    <p>{this.props.speechText}</p>
                </section>
                <section>
                    <h2>Speech Notes</h2>
                    <pre>{this.props.speech.notes}</pre>
                </section>
                <section>
                    <h2>Speech Table Topics</h2>
                    <pre>{this.props.speech.table_topics}</pre>
                </section>
                <section>
                    <h2>Word Count</h2>
                    <h4>Likes: {this.props.wordCount.likes}</h4>
                    <h4>Ands: {this.props.wordCount.ands}</h4>
                </section>
            </>
        );
    }
} 
const mapStateToProps = reduxState => ({
    speech: reduxState.speech,
    speechText: reduxState.speechText.speech_text,
    wordCount: reduxState.wordCount,
});

export default connect(mapStateToProps)(HistoryPage);
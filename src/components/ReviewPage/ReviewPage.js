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
                    <table>
                        <thead>
                            <tr>
                                <th>Likes</th>
                                <th>Ands</th>
                            </tr>
                        </thead>
                    </table>
                </section>
            </>
        );
    }
} 
const mapStateToProps = reduxState => ({
    speech: reduxState.speech,
    speechText: reduxState.speechText.speech_text,

});

export default connect(mapStateToProps)(HistoryPage);
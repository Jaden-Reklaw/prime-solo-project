import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//Import Styles
import './ReviewPage.css';

//Import components to be used on this page
import Scroll from '../Scroll/Scroll';

class HistoryPage extends Component {
    state = {

    }


    //Method to get seconds on DOM
    getSeconds = () => {
        return ('0' + this.props.time % 60).slice(-2);
    }

    //Method to get minutes on the DOM
    getMinutes = () => {
        return Math.floor(this.props.time / 60);  
    }

    //Method to see if the speaker finished in time
    completedInTime = () => {
        //Convert min and max time to seconds
        const min_time = this.props.speech.min_time * 60;
        const max_time = this.props.speech.max_time * 60;
        console.log('min time in seconds', min_time);
        console.log('max time in seconds', max_time);
        if(this.props.time < min_time || this.props.time > max_time){
            return <span> No</span>;
        } else {
            return <span> Yes</span>
        }

    }
    render () {
        return (
            <div className="review-page">
                <div>
                    <h1>Review: {this.props.speech.speech_title}</h1>
                </div>
                    <section className="review-section">
                        <h2>Speech Content</h2>
                        <Scroll>
                            <p>{this.props.speechText}</p>
                        </Scroll>
                    </section>
                    <section className="review-section">
                        <h2>Speech Notes</h2>
                        <Scroll>
                            <pre>{this.props.speech.notes}</pre>
                        </Scroll>
                    </section>
                    <section className="review-section">
                        <h2>Speech Table Topics</h2>
                        <Scroll>
                            <pre>{this.props.speech.table_topics}</pre>
                        </Scroll>
                    </section>
                    <div className="review-wrapper">
                        <section className="review-section">
                            <h2>Word Count</h2>
                            <h4>Likes: {this.props.wordCount.likes}</h4>
                            <h4>Ands: {this.props.wordCount.ands}</h4>
                        </section>
                        <section className="review-section">
                            <h2>Speech Run Time</h2>
                            <h4>Min:Sec = {this.getMinutes()}:{this.getSeconds()}</h4>
                            <h4>Completed In Time: {this.completedInTime()}</h4>
                        </section>
                        <section className="review-section">
                            <h2>Speech Type</h2>
                            <h4>Type: {this.props.speech.speech_type}</h4>
                        </section>
                    </div>
                    <section className="review-section">
                        <h2>Review Controls</h2>
                        <button>Adjust Counts</button>
                        <button>Add Evaluation</button>
                        <button>End Review</button>
                    </section>
            </div>
        );
    }
} 
const mapStateToProps = reduxState => ({
    speech: reduxState.speech,
    speechText: reduxState.speechText.speech_text,
    wordCount: reduxState.wordCount,
    time: reduxState.time.time,
});

export default connect(mapStateToProps)(HistoryPage);
import React, { Component } from 'react';

class Stopwatch extends Component {
    state = {
        secondsElapsed: 0
    }

    getSeconds = () => {
        return ('0' + this.state.secondsElapsed % 60).slice(-2);
    }

    getMinutes = () => {
        return Math.floor(this.state.secondsElapsed / 60);
    }

    handleStartClick = () => {
        let _this = this;

        this.incrementer =  setInterval(function() {
            _this.setState({
                secondsElapsed: (_this.state.secondsElapsed + 1),
            });
        }, 1000);
    }

    handleStopClick = () => {
        clearInterval(this.incrementer);
    }

    render () {
        return (
            <div>
                <h5>{this.getMinutes()}:{this.getSeconds()}</h5>
                <button onClick={this.handleStartClick}>Start</button>
                <button onClick={this.handleStopClick}>Stop</button>
            </div>
        );
    }

} 

export default Stopwatch;
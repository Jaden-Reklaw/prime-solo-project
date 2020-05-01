import React, {Component} from 'react'
import { connect } from 'react-redux';

class SpeechType extends Component {
    handleChangeFor = (event) => {
        console.log('speech type is',this.props.speech_type);
        console.log('value selected', event.target.value);
        
        //Sends dispatch to deleteSpeechSaga to remove the speech once the trash can button is pushed
        this.props.dispatch({type: 'PUT_SPEECH_TYPE', payload: {id:this.props.speech_id, speech_type: event.target.value, user_id: this.props.user_id}});
    }

  render() {
    return (
        <select 
        id="speech_type"
        value={this.props.speech_type}
        onChange={this.handleChangeFor}>
            <option value="debate">Debate</option>
            <option value="demonstrative">Demonstrative</option>
            <option value="entertaining">Entertaining</option>
            <option value="informative">Informative</option>
            <option value="impromptu">Impromptu</option>
            <option value="motivational">Motivational</option>
            <option value="passion">Passion</option>
            <option value="persuasive">Persuasive</option>
            <option value="special_occasion">Special Occasion</option>
        </select>
    );
  }
}


export default connect()(SpeechType);
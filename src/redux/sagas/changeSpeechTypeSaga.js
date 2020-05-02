import axios from 'axios';
import {put, takeLatest } from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* putSpeechTypeSaga(action){
    try {
        console.log('action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.put(`/api/speech/speech_type/${action.payload.id}`, {speech_type: action.payload.speech_type});
        //Request information back from the server after change
        yield put({type: 'FETCH_SPEECH', payload: action.payload.user_id});
    } catch(error) {
        console.log('error with put request for speech type', error);
    }
}

function* changeSpeechTypeSaga() {
    yield takeLatest('PUT_SPEECH_TYPE', putSpeechTypeSaga);
}

export default changeSpeechTypeSaga;
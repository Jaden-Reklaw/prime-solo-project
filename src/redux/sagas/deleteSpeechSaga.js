import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* removeSpeechSaga(action){
    try {
        console.log('action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.delete(`/api/speech/delete/${action.payload.speech_id}`);
        //Request information back from the server after change
        yield put({type: 'FETCH_SPEECH', payload: action.payload.user_id});
        yield put({type: 'FETCH_FINISHED_SPEECHES', payload: action.payload.user_id});
    } catch(error) {
        console.log('error with put request for adding notes', error);
    }
}

function* deleteSpeechSaga() {
    yield takeLatest('DELETE_SPEECH', removeSpeechSaga);
}

export default deleteSpeechSaga;
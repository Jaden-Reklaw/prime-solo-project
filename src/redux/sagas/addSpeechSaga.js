import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* postSpeechSaga(action){
    try {
        console.log('action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.post(`/api/speech/new_speech`, action.payload);
        //Request information back from the server after change
        yield put({type: 'FETCH_SPEECH', payload: action.payload.user_id});
    } catch(error) {
        console.log('error with post request for adding new speech', error);
    }
}

function* addSpeechSaga() {
    yield takeLatest('POST_SPEECH', postSpeechSaga);
}

export default addSpeechSaga;
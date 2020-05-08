import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* putReviewSaga(action){
    try {
        console.log('action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.put(`/api/speech/review/${action.payload.speech_id}`, action.payload);
        //Request information back from the server after change
        yield put({type: 'FETCH_SPEECH', payload: action.payload.user_id});
    } catch(error) {
        console.log('error with put request for adding notes', error);
    }
}

function* addReviewSaga() {
    yield takeLatest('PUT_SPEECH_REVIEW', putReviewSaga);
}

export default addReviewSaga;
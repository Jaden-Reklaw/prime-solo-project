import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* putEvalSaga(action){
    try {
        console.log('action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.put(`/api/speech/eval/${action.payload.id}`, action.payload);
        //Request information back from the server after change
        yield put({type: 'FETCH_SPEECH', payload: action.payload.user_id});
    } catch(error) {
        console.log('error with put request for adding notes', error);
    }
}

function* addEvalSaga() {
    yield takeLatest('PUT_EVAL', putEvalSaga);
}

export default addEvalSaga;
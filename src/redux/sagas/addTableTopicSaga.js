import axios from 'axios';
import {put, takeLatest } from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* putTableTopicSaga(action){
    try {
        console.log('action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.put(`/api/speech/table_topic/${action.payload.id}`, {table_topics: action.payload.table_topics});
        //Request information back from the server after change
        yield put({type: 'FETCH_SPEECH', payload: action.payload.user_id});
    } catch(error) {
        console.log('error with put request for table topic', error);
    }
}

function* addTableTopicSaga() {
    yield takeLatest('PUT_TABLE_TOPICS', putTableTopicSaga);
}

export default addTableTopicSaga;
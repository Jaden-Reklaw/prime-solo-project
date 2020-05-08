import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* fetchSpeechSaga(action){
    try {
        //Making asyn AJAX (axios) request
        const response = yield axios.get(`/api/speech/user?q=${action.payload}`);
        //Once that is back successfully, dispatch action to the reducer
        yield put({ type: 'SET_SPEECHES', payload: response.data});
    } catch(error) {
        console.log('error with movie get request', error);
    }
}

//Generator function that uses saga to ajax get request
function* fetchOneSpeechSaga(action){
    try {
        //Making asyn AJAX (axios) request
        const response = yield axios.get(`/api/speech/speech?q=${action.payload}`);
        //Once that is back successfully, dispatch action to the reducer
        yield put({ type: 'SET_SPEECH', payload: response.data});
    } catch(error) {
        console.log('error with movie get request', error);
    }
}

//Generator function that uses saga to ajax get request
function* fetchFinishedSpeechSaga(action){
    try {
        //Making asyn AJAX (axios) request
        const response = yield axios.get(`/api/speech/finished/user?q=${action.payload}`);
        //Once that is back successfully, dispatch action to the reducer
        yield put({ type: 'SET_FINISHED_SPEECHES', payload: response.data});
    } catch(error) {
        console.log('error with movie get request', error);
    }
}

function* speechSaga() {
    yield takeLatest('FETCH_SPEECH', fetchSpeechSaga);
    yield takeLatest('FETCH_SPEECH_BY_ID', fetchOneSpeechSaga);
    yield takeLatest('FETCH_FINISHED_SPEECHES', fetchFinishedSpeechSaga);
}

export default speechSaga;

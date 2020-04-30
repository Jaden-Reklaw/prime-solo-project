import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* fetchSpeechSaga(action){
    try {
        //Making asyn AJAX (axios) request
        yield axios.put(`/api/speech/notes/${action.payload.id}`, {notes: action.payload.notes});
    } catch(error) {
        console.log('error with movie get request', error);
    }
}

function* addNoteSaga() {
    yield takeLatest('PUT_NOTES', fetchSpeechSaga);
}

export default addNoteSaga;
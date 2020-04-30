import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

//Generator function that uses saga to ajax get request
function* putNoteSaga(action){
    try {
        console.log('action.payload is', action.payload);
        //Making asyn AJAX (axios) request
        yield axios.put(`/api/speech/notes/${action.payload.id}`, {notes: action.payload.notes});
    } catch(error) {
        console.log('error with put request for adding notes', error);
    }
}

function* addNoteSaga() {
    yield takeLatest('PUT_NOTES', putNoteSaga);
}

export default addNoteSaga;
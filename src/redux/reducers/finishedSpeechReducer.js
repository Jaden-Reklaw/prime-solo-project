//Used to store SPEECHES returned from the server
const finishedSpeechReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FINISHED_SPEECHES':
            return action.payload;
        default:
            return state;
    }
}

export default finishedSpeechReducer;
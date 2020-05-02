//Used to store SPEECHES returned from the server
const oneSpeechReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SPEECH':
            return action.payload;
        default:
            return state;
    }
}

export default oneSpeechReducer;
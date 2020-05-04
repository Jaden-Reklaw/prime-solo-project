//Used to store SPEECHES returned from the server
const speechTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SPEECH_TEXT':
            return action.payload;
        default:
            return state;
    }
}

export default speechTextReducer;
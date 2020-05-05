//Used to store SPEECHES returned from the server
const counterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_WORD_COUNTS':
            return action.payload;
        default:
            return state;
    }
}

export default counterReducer;
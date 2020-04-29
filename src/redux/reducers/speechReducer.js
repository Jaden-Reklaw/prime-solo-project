//Used to store SPEECHES returned from the server
const speechReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SPEECHES':
            return action.payload;
        default:
            return state;
    }
}

export default speechReducer;
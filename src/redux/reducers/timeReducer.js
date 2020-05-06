//Used to store the speakers time after they finish their speech
//It will be in seconds when you do the comparison to see if they finished in time
const timeReducer = (state = {time: 0}, action) => {
    switch (action.type) {
        case 'SET_TIME':
            return action.payload;
        default:
            return state;
    }
}

export default timeReducer;
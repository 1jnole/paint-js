import {createStore} from 'redux';

const reducer = (state, action) => {
    if (action.type === "COLOUR") {
        return {
            ...state,
            colour: action.colour,
        }
    }
    return state;
}

export default createStore(reducer, { colour: "" });

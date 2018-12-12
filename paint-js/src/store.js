import { createStore } from 'redux';

const reducer = (state, action) => {

    switch (action.type) {

        case "CHANGE_COLOUR": {
            return {
                ...state,
                colour: action.colour
            };
            break;
          }

        case "CHANGE_STROKE_WIDTH": {
            return {
                ...state,
                colour: action.colour
            };
            break;
          }
        default:
            console.log("Invalid choice");
            break;
    }
    return state;
}

export default createStore(reducer, {colour: "", strokeWidth: ""});

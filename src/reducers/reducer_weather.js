import {FETCH_WEATHER} from "../actions/index";

export default function (state = [], action) {
    // console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);  // don't ever mutate the state, alwasy return a new state replace the old one
            return [ action.payload.data, ...state ];
    }

    return state;
}
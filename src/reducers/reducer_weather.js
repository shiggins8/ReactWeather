import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // Never mutate state directly, must create a new array, e.g. as follows
            return [ action.payload.data, ...state ];
    }
    return state;
}
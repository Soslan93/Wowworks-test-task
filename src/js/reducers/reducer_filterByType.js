import { FILTER_BY_TYPE } from '../actions/index';
const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case FILTER_BY_TYPE:
            return action.payload;
    }
    return state;
}
import { FILTER_LIST } from '../../actions/index';
const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case FILTER_LIST:
            return action.payload;
    }
    return state;
}
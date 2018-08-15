import { PERSON_FILT } from '../../actions/index';
const initialState = false;

export default function (state = initialState, action) {
    switch (action.type) {
        case PERSON_FILT:
            return action.payload;
    }
    return state;
}
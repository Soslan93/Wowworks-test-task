import { PERSON_FILT } from '../../actions/index';

export default function (state = false, action) {
    switch (action.type) {
        case PERSON_FILT:
            return action.payload.checked;
    }
    return state;
}
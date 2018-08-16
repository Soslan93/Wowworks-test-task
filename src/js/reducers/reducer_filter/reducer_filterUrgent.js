import { URGENT_FILT } from '../../actions/index';

export default function (state = false, action) {
    switch (action.type) {
        case URGENT_FILT:
            return action.payload.checked;
    }
    return state;
}
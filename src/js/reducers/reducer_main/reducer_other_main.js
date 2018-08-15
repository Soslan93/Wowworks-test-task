import { FETCH_OTHER_DATA } from '../../actions/index';

export default function (state = "", action) {
    switch (action.type) {
        case FETCH_OTHER_DATA:
            let data = action.payload.data[1];
            return data;
    }
    return state;
}
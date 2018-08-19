import { FETCH_DATA } from '../../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_DATA:
            let data = Object.keys(action.payload.data);
            return data;
    }
    return state;
}
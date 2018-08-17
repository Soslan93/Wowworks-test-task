import { FETCH_TASK_DATA } from '../../actions/index';

export default function (state = "", action) {
    switch (action.type) {
        case FETCH_TASK_DATA:
            let data = action.payload.data["tasks"][0];
            return data;
    }
    return state;
}
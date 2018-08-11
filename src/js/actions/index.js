export const FILTER_LIST = 'FILTER_LIST';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';

export function filterList(term) {

    return {
        type: FILTER_LIST,
        payload: term.toLowerCase()
    };

}

export function filterByType(e) {

    if (e.className.includes('personal') && e.checked) {
        return {
            type: FILTER_BY_TYPE,
            payload: 'personal'
        };
    } else if (e.className.includes('night') && e.checked) {
        return {
            type: FILTER_BY_TYPE,
            payload: 'night'
        };
    } else if (e.className.includes('urgent') && e.checked) {
        return {
            type: FILTER_BY_TYPE,
            payload: 'urgent'
        };
    } else if (!e.checked) {
        console.log(e.checked);
        return {
            type: FILTER_BY_TYPE,
            payload: ''
        };
    } 

}


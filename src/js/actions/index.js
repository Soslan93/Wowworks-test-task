import axios from "axios";
import { request } from "https";

export const FILTER_LIST = 'FILTER_LIST';
export const PERSON_FILT = 'PERSON_FILT';
export const NIGHT_FILT = 'NIGHT_FILT';
export const URGENT_FILT ='URGENT_FILT';
export const FETCH_TASK_DATA = 'FETCH_TASK_DATA';
export const FETCH_OTHER_DATA = 'FETCH_OTHER_DATA';
export const FETCH_DATA = 'FETCH_DATA';

export function filterList(term) {

    return {
        type: FILTER_LIST,
        payload: term.toLowerCase()
    };

}

export function fetchTaskData() {
    const request = axios.get(`http://localhost:3000`);

    return {
        type: FETCH_TASK_DATA,
        payload: request
    }

}

export function personFilt(element) {
    
    return {
        type: PERSON_FILT,
        payload: element
    };
}

export function nightFilt(element) {
    
    return {
        type: NIGHT_FILT,
        payload: element
    };
}

export function urgentFilt(element) {
    
    return {
        type: URGENT_FILT,
        payload: element
    };
}

export function fetchOtherData() {
    const request = axios.get(`http://localhost:3000`);
    return {
        type: FETCH_OTHER_DATA,
        payload: request
    }
}

export function fetchData() {
    const request = axios.get(`http://localhost:3000`);
    return {
        type: FETCH_DATA,
        payload: request
    }
}


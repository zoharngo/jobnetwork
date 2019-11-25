import initialState from "../initialState";
import { SEARCH_JOBS_SUCCESS, GET_JOBS_TITLE_SUCCESS } from "../actions/actionTypes";


export default function jobsReducer(state = initialState.jobs, action) {

    switch (action.type) {
        case SEARCH_JOBS_SUCCESS:
            return {
                ...state,
                jobs: action.jobs
            }
        case GET_JOBS_TITLE_SUCCESS:
            return {
                ...state,
                jobsTitle: action.jobsTitle
            }

        default:
            return state;
    }

}
import initialState from "../initialState";
import { CLEAR_SEARCH_RESULTS, SEARCH_JOBS_SUCCESS, GET_JOBS_TITLE_SUCCESS, SAVE_TEXT_SEARCH } from "../actions/actionTypes";


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
        case SAVE_TEXT_SEARCH:
            return {
                ...state,
                textSearch: action.textSearch
            }

        case CLEAR_SEARCH_RESULTS:
            return {
                ...state,
                jobs: []
            }

        default:
            return state;
    }

}
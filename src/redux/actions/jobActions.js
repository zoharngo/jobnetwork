import { SEARCH_JOBS_SUCCESS, GET_JOBS_TITLE_SUCCESS } from "./actionTypes";

export function showSearchResultsAction(jobs) {
    return { type: SEARCH_JOBS_SUCCESS, jobs }
}


export function loadJobsTitlesAction(jobsTitle) {
    return { type: GET_JOBS_TITLE_SUCCESS, jobsTitle }
}

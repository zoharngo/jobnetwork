import { SEARCH_JOBS_SUCCESS, GET_JOBS_TITLE_SUCCESS, SAVE_TEXT_SEARCH, CLEAR_SEARCH_RESULTS } from "./actionTypes";

export function showSearchResultsAction(jobs) {
    return { type: SEARCH_JOBS_SUCCESS, jobs }
}

export function loadJobsTitlesAction(jobsTitle) {
    return { type: GET_JOBS_TITLE_SUCCESS, jobsTitle }
}

export function saveTextSearchAction(textSearch) {
    return { type: SAVE_TEXT_SEARCH, textSearch }
}

export function clearSearchResultsAction() {
    return { type: CLEAR_SEARCH_RESULTS }
}
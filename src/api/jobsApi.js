import { handleResponse, handleError } from "./apiUtils";
import { showSearchResultsAction, loadJobsTitlesAction } from "../redux/actions/jobActions";
import { beginApiCall, apiCallError } from "../redux/actions/apiStatusActions";
import store from "../redux/configureStore";

const baseUrl = process.env.API_URL;
const top = 100;

export function searchJobs(jobTitle = 'default') {
    store.dispatch(beginApiCall());
    return fetch(`${baseUrl}/jobs/?jobTitle=${encodeURIComponent(jobTitle)}&limit=${top}`)
        .then(async res => {
            const jobs = await handleResponse(res);
            store.dispatch(showSearchResultsAction(jobs));
        })
        .catch(e => {
            store.dispatch(apiCallError(e))
            handleError(e);
            throw e;
        });
}

export function getJobsTitles() {
    store.dispatch(beginApiCall());
    return fetch(`${baseUrl}/jobsTitle`)
        .then(async res => {
            const jobsTitles = await handleResponse(res);
            store.dispatch(loadJobsTitlesAction(jobsTitles));
        })
        .catch(e => {
            store.dispatch(apiCallError(e))
            handleError(e);
            throw e;
        });
}
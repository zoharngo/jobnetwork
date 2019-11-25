import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import { searchJobs } from "../../api/jobsApi";
import { showSearchResultsAction } from "../../redux/actions/jobActions";
import { AutoSuggestInput } from "../common/";

class SearchBar extends Component {

    state = {
        searchInput: "",
    };

    invokeSearch = () => {
        const { searchInput } = this.state;
        try {
            searchJobs(searchInput);
        } catch (error) {
            toast.error("Search failed. " + error.message, { autoClose: false });
        }

    }

    render() {
        const { invokeSearch } = this;
        return (
            <div className="input-group w-100 pt-4 pl-4">
                <AutoSuggestInput />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" onClick={() => invokeSearch()} >
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div >
        );
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(SearchBar);

function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            showSearchResultsAction: jobs => dispatch(showSearchResultsAction(jobs))
        }
    };
}
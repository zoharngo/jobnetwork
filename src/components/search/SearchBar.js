import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import { searchJobs } from "../../api/jobsApi";
import { AutoSuggestInput } from "../common/";
import PropTypes from "prop-types";

class SearchBar extends Component {

    invokeSearch = () => {
        const { textSearch } = this.props;
        try {
            searchJobs(textSearch);
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
    mapStateToProps, null
)(SearchBar);

SearchBar.propTypes = {
    textSearch: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {
        ...state,
        textSearch: state.jobs.textSearch,
    };
}
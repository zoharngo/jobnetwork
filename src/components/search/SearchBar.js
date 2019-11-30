import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from "react-toastify";
import { searchJobs, getJobsTitles } from "../../api/jobsApi";
import { AutoSuggestInput } from "../common/";
import PropTypes from "prop-types";
import { clearSearchResultsAction } from "../../redux/actions/jobActions";

class SearchBar extends Component {

    invokeSearch = () => {
        this.props.actions.clearSearchResultsAction();
        const { textSearch } = this.props;

        searchJobs(textSearch).catch(e => {
            try {
                const msg = JSON.parse(e.message);
                if (msg && msg.status == 400) {
                    toast.error(`Please check your input ' ${textSearch} '`, { autoClose: false });
                }
            } catch (error) {
                toast.error("Sorry something went wrong please try later..", { autoClose: false });
            }
        }).finally(() => {
            getJobsTitles();
        });



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

SearchBar.propTypes = {
    actions: PropTypes.object.isRequired,
    textSearch: PropTypes.string.isRequired
};


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            clearSearchResultsAction: () => dispatch(clearSearchResultsAction())
        }
    };
}

function mapStateToProps(state) {
    return {
        ...state,
        textSearch: state.jobs.textSearch,
    };
}
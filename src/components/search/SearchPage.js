import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import JobList from "./JobList";
import { getJobsTitles } from "../../api/jobsApi";
import { toast } from "react-toastify";
import { Spinner } from "../common/";
import PropTypes from "prop-types";

class SearchPage extends Component {

  componentDidMount() {
    try {
      getJobsTitles();
    } catch (error) {
      toast.error("Failed to load. " + error.message, { autoClose: false });
    }
  }

  render() {
    return (
      <Container>
        <div>
          <Row>
            <div className="search search-bar">
              <SearchBar />
            </div>
          </Row>

          <Row>
            <div className="search results">
              <JobList />
            </div>
          </Row>
        </div>
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(SearchPage);

SearchPage.propTypes = {
  loading: PropTypes.bool.isRequired,
};


function mapStateToProps(state) {
  return {
    ...state,
    loading: state.apiCallsInProgress > 0
  };
}
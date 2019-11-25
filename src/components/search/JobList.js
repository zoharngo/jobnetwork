import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Spinner } from "../common/";
import Job from "./Job";
import PropTypes from "prop-types";

class JobList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.loading ? (
                        <Spinner className="align-middle" />
                    ) : (<ListGroup>{
                        this.props.jobs.map(job => {
                            return (<ListGroupItem key={job.jobId}>
                                <Job job={job} />
                            </ListGroupItem>)
                        })
                    }
                    </ListGroup>)
                }
            </div>
        );
    }
}

export default connect(
    mapStateToProps, null
)(JobList);


JobList.propTypes = {
    loading: PropTypes.bool.isRequired,
    jobs: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        ...state,
        jobs: state.jobs.jobs,
        loading: state.apiCallsInProgress > 0
    };
}
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import PropTypes from "prop-types";



const Job = ({ job }) => {

    return (
        <Container>
            <Nav className="font-weight-light">
                <Nav.Item>
                    <Nav.Link style={styles.link} className="p-0" href="/matches" ><h5>{job.title}</h5></Nav.Link>

                    <div style={styles.company}><span style={{ fontWeight: 'bold', }} >{job.companyName}</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>{job.jobLocation}</span></div>
                    <div style={styles.space}><span style={{ fontSize: '0.95em', color: '#888', }} >{timePassedBetweenJobUpdate(job.updatedAt)}</span></div>
                    <div style={styles.space}><p>{job.discirption}</p></div>
                </Nav.Item>
            </Nav>
        </Container >
    );
};

function timePassedBetweenJobUpdate(updatedAt) {
    if (updatedAt) {
        const jobDate = new Date(updatedAt);
        const now = new Date();
        const timePassed = (now.getTime() - jobDate.getTime()) / (1000 * 60 * 60 * 24);
        const days = Math.trunc(timePassed);
        const hours = Number((timePassed - days).toFixed(1)) * 10;

        return `${days} DAYS and ${hours} HOURS`;
    }
}

Job.propTypes = {
    job: PropTypes.object.isRequired,
};

const styles = {
    link: {
        fontSize: 18
    },
    title: {
        float: 'left',
        fontWeight: 'bold',
        fontSize: 16
    },
    company: {
        fontSize: '0.95em',
        color: 'black',
        marginTop: 2,
    },
    space: {
        marginTop: 10
    },
    jobLocation: {
        paddingTop: 10,
        paddingBottom: 10,
    }
};



export default Job;


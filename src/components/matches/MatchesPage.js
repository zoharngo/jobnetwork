import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
const MatchesPage = () => (
    <div className="p-4">
        <Jumbotron>
            <h3>Matches Page</h3>
            <ul>
                <li>Senior Personal Assitanant</li>
                <li>Capital Logen For Personal Assitanant</li>
                <li>Senior Programmer</li>
                <li>Junior Programmer</li>
            </ul>
            <Link to="about" className="btn btn-primary btn-lg">
                Learn more
            </Link>
        </Jumbotron>
    </div>

);

export default MatchesPage;
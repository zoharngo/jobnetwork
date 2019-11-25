import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";

const HomePage = () => (
  <div className="p-1">
    <Jumbotron>
      <h3>Pandologic Teach Test</h3>
      <p>React, Redux and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
    </Link>
    </Jumbotron>
  </div>
);

export default HomePage;

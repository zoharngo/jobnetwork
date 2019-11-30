import React from "react";
import Nav from 'react-bootstrap/Nav'

const Menu = () => {

    return (
        <nav className="menu p-1">
            <Nav className="font-weight-light"
                activeKey="/search"
            >
                <Nav.Item>
                    <Nav.Link href="/" className="text-dark">
                        <i className="fa fa-home fa-2x"></i>
                        <br></br>
                        <span>Jobs</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link active={true} className="text-dark" href="/search">
                        <i className="fa fa-fw fa-search fa-2x"></i>
                        <br></br>
                        <span>Search</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>

                    <Nav.Link href="/matches" className="text-dark">
                        <i className="fa fa-fw fa fa-mars-double fa-2x"></i>
                        <br></br>
                        <span>Matches</span>
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        </nav>
    );
};

export default Menu;

import React from "react";
import { Navbar, NavItem, Nav, NavbarBrand } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";

import "./studentnav.css";
import logo from "./../logo.png";
import logoText from "./../logoText.png";
import Profile from "../../Profile/profile";

const StudentNav = () => {
    return (
        <div>
            <Navbar light expand="lg">
                <Nav navbar className="flex-column">
                    <NavbarBrand>
                        <Link className="logo" to="#">
                            <img className="logo-image" src={logo} alt="logo" />
                            <span className="logo-text">
                                {" "}
                                <img src={logoText} alt="TITA" />
                            </span>
                        </Link>
                    </NavbarBrand>
                    <NavItem>
                        <Link className="nav-link" to="/studtimetable">
                            <i
                                className="fa fa-calendar fa-2x"
                                aria-hidden="true"
                            ></i>
                            <span className="link-text"> Time table</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/studentclassrooms">
                            <i
                                className="fa fa-users fa-2x"
                                aria-hidden="true"
                            ></i>
                            <span className="link-text"> Classroom</span>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/todolist">
                            <i
                                className="fa fa-folder fa-2x"
                                aria-hidden="true"
                            ></i>
                            <span className="link-text"> To-Do List</span>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>

            <div>
                <Profile />
            </div>
        </div>
    );
};

export default withRouter(StudentNav);

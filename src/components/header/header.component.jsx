import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = props => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light navbar-expand-md navigation-clean">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Fitness
          </Link>
          {/* <a className="navbar-brand" href="#">
            Fitness
          </a> */}
          <button
            data-toggle="collapse"
            data-target="#navcol-1"
            className="navbar-toggler"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto">
              <li role="presentation" className="nav-item">
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li role="presentation" className="nav-item">
                <NavLink
                  to="/plans"
                  className="nav-link"
                  activeClassName="active"
                >
                  Plans
                </NavLink>
              </li>
              <li role="presentation" className="nav-item">
                <a className="nav-link" href="#">
                  Third Item
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  data-toggle="dropdown"
                  aria-expanded="false"
                  className="dropdown-toggle nav-link"
                  href="#"
                >
                  Dropdown{" "}
                </a>
                <div role="menu" className="dropdown-menu">
                  <a role="presentation" className="dropdown-item" href="#">
                    First Item
                  </a>
                  <a role="presentation" className="dropdown-item" href="#">
                    Second Item
                  </a>
                  <a role="presentation" className="dropdown-item" href="#">
                    Third Item
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;

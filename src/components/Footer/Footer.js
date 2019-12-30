import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

const footer = props => {
  return (
    <div className={classes.FooterBasic}>
      <footer>
        <div className={classes.Social}>
          <Link to="/">
            <i className="icon ion-social-instagram"></i>
          </Link>
          <Link to="/">
            <i className="icon ion-social-snapchat"></i>
          </Link>
          <Link to="/">
            <i className="icon ion-social-twitter"></i>
          </Link>
          <Link to="/">
            <i className="icon ion-social-facebook"></i>
          </Link>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">Services</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">About</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">Terms</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
        <p className={classes.Copyright}>Company Name © 2017</p>
      </footer>
    </div>
  );
};

export default footer;

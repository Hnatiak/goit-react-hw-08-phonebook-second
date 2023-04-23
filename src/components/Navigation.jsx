import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
import styles from "./Navigation.module.css";


const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact='true' className={styles.activeLink}> 
    {/* //style={styles.link} */}
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact="true"
        // style={styles.link}
        className={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
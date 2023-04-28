import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
// import styles from "./Navigation.module.css";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact='true' style={styles.link}> 
    {/* activeStyle={styles.activeLink} */}
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact='true'
        style={styles.link}
      >
        {/* activeStyle={styles.activeLink} */}
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
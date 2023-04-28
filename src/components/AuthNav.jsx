import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import styles from './AuthNav.module.css';
import PropTypes from 'prop-types'

const AuthNav = () => (
  <div className={styles.button}>
    <Button
      type="button"
      variant="contained"
      color="primary"
      className={styles.button}
      style={{ marginRight: "15px" }}
    >
      <NavLink
        to="/register"
        exact="true"
        className={styles.activeLink}
      >
        Registration
      </NavLink>
    </Button>
    <Button
      className={styles.button}
      type="button"
      variant="contained"
      color="primary"
    >
      <NavLink
        to="/login"
        exact="true"
        className={styles.activeLink}
      >
        Login
      </NavLink>
    </Button>
  </div>
);

AuthNav.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AuthNav;
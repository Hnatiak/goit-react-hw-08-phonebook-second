import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <Button
      type="click"
      variant="contained"
      className={styles.button}
    >
      <NavLink
        to="/register"
        exact="true"
        // exact="true" or exact={value.toString()}.
        // style={styles.activeLink}
        className={styles.activeLink}
      >
        Registration
      </NavLink>
    </Button>
    <Button
      className={styles.button}
      type="click"
      variant="contained"
    >
      <NavLink
        to="/login"
        exact="true"
        // style={styles.activeLink}
        className={styles.activeLink}
      >
        Login
      </NavLink>
    </Button>
  </div>
);

export default AuthNav;
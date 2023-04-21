import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <Button
      type="click"
      variant="contained"
      color="primary"
      style={{ height: 30 }}
    >
      <NavLink
        to="/register"
        // exact="true"
        // exact="true" or exact={value.toString()}.
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>
    </Button>
    <Button
      style={{ marginLeft: 15, height: 30 }}
      type="click"
      variant="contained"
      color="primary"
    >
      <NavLink
        to="/login"
        // exact="true"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </Button>
  </div>
);

export default AuthNav;
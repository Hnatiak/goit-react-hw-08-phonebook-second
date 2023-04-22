import { connect } from "react-redux";
import authSelectors from "../redux/filter/filter-selectors";
import authOperations from "../redux/filter/filter-operations";
import { Button } from '@mui/material';
import styles from './UserMenu.module.css';

const UserMenu = ({ mail, name, onLogout }) => (
  <div className={styles.container}>
    {/* style={styles.container} */}
    <span className={styles.mail}>User e-mail: {mail}</span>
    <span className={styles.name}>User name: {name}</span>
    <Button
      type="button"
      onClick={onLogout}
      variant="contained"
      className={styles.activeLink}
      // color="primary"
    >
      Logout 🟥
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.userName(state),
  mail: authSelectors.userMail(state),
});
const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
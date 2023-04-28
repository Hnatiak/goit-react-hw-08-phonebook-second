import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import css from './AppBar.module.css';
import { connect } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";

const AppBar = ({ isAuthenticated }) => (
  <header className={css.header}>
    <h1 className={css.title}>
    Phone<span className={css.title__color}>book</span>
    </h1>
    <Navigation />
    <div className={css.button}>
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </div>
  </header>
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
import { useEffect } from 'react';
import { connect } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import AppBar from '../components/AppBar';
import { onGetCurrentUser } from '../redux/auth/auth-operations';
import PropTypes from 'prop-types';

function Layout({ isAuthenticated, onGetCurrentUser, children }) {
useEffect(() => {
onGetCurrentUser();
}, [onGetCurrentUser]);

return (
<>
  <AppBar />
  <main>{children}</main>
</>
);
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = { onGetCurrentUser };

Layout.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onGetCurrentUser: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Layout);
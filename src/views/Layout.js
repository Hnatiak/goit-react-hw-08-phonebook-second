// import React from "react";
// // import { Link } from "react-router-dom";
// import HomeViews from './HomeViews';



// function Layout({ children }) {
//   return (
//     <div>
//         {/* <Link to="/">Home</Link> */}
//         {/* <AppBar/> */}
//             <HomeViews to="/register"/>
//       <main>{children}</main>
//     </div>
//   );
// }

// export default Layout;










// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import authSelectors from '../redux/auth/auth-selectors';
// import AppBar from '../components/AppBar';
// import { onGetCurrentUser } from '../redux/auth/auth-operations';

// class Layout extends Component {
//   componentDidMount() {
//     this.props.onGetCurrentUser();
//   }

//   render() {
//     return (
//       <>
//         <AppBar />
//         <main>{this.props.children}</main>
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.isAuthenticated(state),
// });

// const mapDispatchToProps = { onGetCurrentUser };

// export default connect(mapStateToProps, mapDispatchToProps)(Layout);





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
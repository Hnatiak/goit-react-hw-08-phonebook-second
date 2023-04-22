// import React from 'react';
// import css from './AppBar.module.css';
// // import Navigation from './Navigation';
// // import AuthNav from './AuthNav';
// // import UserMenu from './UserMenu';

// function AppBar() {
//   return (
//     <div className={css.header}>
//       <h1 className={css.title}>
//         Phone<span className={css.title__color}>book</span>
//       </h1>
//       <div>
//         <button className={css.button}>Login</button>
//         <button className={css.button}>Register</button>
//       </div>
//     </div>
//   );
// }

// // export default function AppBar() {
// //     return (
// //         <header className='header'>
// //             <Navigation/>
// //             <AuthNav/>
// //             {/* <UserMenu/> */}
// //         </header>
// //     )
// // }

// export default AppBar;

import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import css from './AppBar.module.css';
import { connect } from "react-redux";
import authSelectors from "../redux/filter/filter-selectors";

const AppBar = ({ isAuthenticated }) => (
  <header className={css.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});
export default connect(mapStateToProps)(AppBar);
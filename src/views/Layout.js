import React from "react";
// import { Link } from "react-router-dom";
import HomeViews from './HomeViews';



function Layout({ children }) {
  return (
    <div>
        {/* <Link to="/">Home</Link> */}
        {/* <AppBar/> */}
            <HomeViews to="/register"/>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
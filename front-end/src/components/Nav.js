import React from "react";
import logo from "../img/logo-3d-png-9039.png";
import { useAuth0 } from "@auth0/auth0-react";
import { BiExit } from "react-icons/bi";

function Nav() {
  const { isAuthenticated, user, logout } = useAuth0();
  return (
    isAuthenticated && (
      <div className="nav">
        <img className="logo_nav" src={logo} alt="logo"></img>
        <div className="container_nav-grid">
          <button onClick={() => logout()}>
            <BiExit className="icon_nav" />
          </button>
          <p>Welcome {user.email}</p>
        </div>
      </div>
    )
  );
}

export default Nav;

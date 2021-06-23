import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";

function Navbar() {

  return (
    <>
      <p className="my-name"> !dfs!!</p>
      <ul>
        <li>
          <NavLink to="/">
            <button onClick={logoutUser}>Logout</button>
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/projects">
            Projects
          </NavLink>
        </li>

      </ul>
    </>
  ) 
}

export default Navbar;

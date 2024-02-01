import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const handelLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost text-xl">Real Man</a>
        <Link className="btn btn-ghost text-xl" to={"/"}>
          Home
        </Link>
        {user && (
          <>
            <Link className="btn btn-ghost text-xl" to={"/orders"}>
              Orders
            </Link>
            <Link className="btn btn-ghost text-xl" to={"/profile"}>
              Profile
            </Link>
          </>
        )}
        {!user && (
          <>
            <Link className="btn btn-ghost text-xl" to={"/login"}>
              Login
            </Link>
            <Link className="btn btn-ghost text-xl" to={"/register"}>
              Register
            </Link>
          </>
        )}
        {user ? (
          <>
            <small>{user.email}</small>
            <button onClick={handelLogout} className="btn btn-xs">
              Sign out
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;

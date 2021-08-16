import React from "react";
// import { Link } from "react-router-dom";
interface INavbar {
  setUserData(userData: object): void;
  userData: {
    name: string;
    email: string;
    isFormShow: boolean;
    isSign: boolean;
  };
}

const Navbar: React.FC<INavbar> = ({ userData, setUserData }) => {
  const handleShowForm = () => {
    setUserData({ isFormShow: true });
  };
  const handleSignOut = () => {
    setUserData({ name: "", email: "", isFormShow: false, isSign: false });
  };
  return (
    <nav>
      <div className="nav-wrapper purple teal px1">
        <a href="/" className="brand-logo fz10">
          Weather
        </a>
        <ul className="right hide-on-med-and-down">
          {userData.isSign ? (
            <li>
              <span>{userData?.name}</span>
              <span>{userData?.email}</span>
              <a
                onClick={handleSignOut}
                className="waves-effect waves-light btn-small"
              >
                Sign out
              </a>
            </li>
          ) : (
            <li
              onClick={handleShowForm}
              className={!userData.isFormShow ? "" : "disabled-link"}
            >
              <a className="waves-effect waves-light btn-small">Sign in</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

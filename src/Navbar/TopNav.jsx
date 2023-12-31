import React, { useContext } from "react";

import styles from "./TopNav.module.css";

import { BsFillBrightnessHighFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import Profile from "../Componets/Profile/Profile";
import SearchedUser from "./SearchedUser";
import { NavLink } from "react-router-dom";

const TopNav = () => {
  const { state, dispatch } = useContext(DataUserContext);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const userprofileData = state?.user?.find(
    ({ username }) => username === userData?.username
  );

  const userHandler = (user) => {
    dispatch({ type: "USER_ON_PROFILE", payload: user });
  };
  const { searchedText } = state;

  const searchedUser = state?.user?.filter(
    (userr) =>
      userr?.username?.toLowerCase().includes(searchedText?.toLowerCase()) ||
      userr?.firstName?.toLowerCase().includes(searchedText?.toLowerCase()) ||
      userr?.lastName?.toLowerCase().includes(searchedText?.toLowerCase())
  );

  const themeHandler = () => {
    dispatch({ type: "THEME", payload: !state?.theme });
  };

  const { theme } = state;

  return (
    <div
      className={`${styles.topnavcontainer} ${
        theme ? styles.lighttheme : styles.darktheme
      }`}
    >
      <div className={`${styles.topnavlogo}  `}>
        <div className={styles.hidelogo}>Prinstagram</div>
      </div>

      <div className={styles.inputdiv}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Users"
          className={`${styles.topnavsearchbar} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
          value={searchedText}
          onChange={(event) =>
            dispatch({ type: "SEARCHED", payload: event.target.value })
          }
        />

        {searchedText?.length > 0 && (
          <div
            className={`${styles.searchednav} ${
              theme ? styles.lighttheme : styles.darktheme
            }`}
          >
            {" "}
            {searchedUser?.length === 0 && (
              <h2
                className={` ${theme ? styles.lighttheme : styles.darktheme}`}
              >
                No Users Matched
              </h2>
            )}
            {searchedUser.map((user) => (
              <SearchedUser user={user} />
            ))}
          </div>
        )}
      </div>

      <div className={styles.topnavprofile}>
        <div>
          <button
            className={`${styles.lightmode} ${
              theme ? styles.lighttheme : styles.darktheme
            }`}
            onClick={() => themeHandler()}
          >
            {theme ? <BsFillBrightnessHighFill /> : <MdDarkMode />}
          </button>
        </div>
        <div className={styles.hidelogo}>
          <NavLink
            to={`/userprofile/${userprofileData?.username}`}
            className={styles.navlink}
          >
            <button
              className={`${styles.topnavprofilebtn} ${
                theme ? styles.lighttheme : styles.darktheme
              }`}
              onClick={() => userHandler(userprofileData)}
            >
              <Profile
                url={userprofileData?.profilePicture}
                height={"40px"}
                width={"40px"}
              />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

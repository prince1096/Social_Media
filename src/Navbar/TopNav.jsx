import React, { useContext } from "react";

import styles from "./TopNav.module.css";
import { CgProfile } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

import { BsFillBrightnessHighFill } from "react-icons/bs";
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

  // console.log(searchedText);

  // console.log(searchedUser);

  const themeHandler = () => {
    dispatch({ type: "THEME", payload: !state?.theme });
  };

  // className={theme ? styles.lighttheme : styles.darktheme}

  const { theme } = state;

  return (
    <div
      className={`${styles.topnavcontainer} ${
        theme ? styles.lighttheme : styles.darktheme
      }`}
    >
      <div className={`${styles.topnavlogo}  `}>
        <div>
          <BsInstagram className={styles.instagram} />
        </div>

        <div className={styles.hidelogo}>Prinstagram</div>
      </div>

      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Users"
          className={styles.topnavsearchbar}
          value={searchedText}
          onChange={(event) =>
            dispatch({ type: "SEARCHED", payload: event.target.value })
          }
        />
      </div>

      <div className={styles.topnavprofile}>
        <div>
          <button className={styles.lightmode} onClick={() => themeHandler()}>
            <BsFillBrightnessHighFill className={styles.lightmode} />
          </button>
        </div>
        <div className={styles.hidelogo}>
          <NavLink
            to={`/userprofile/${userprofileData?.username}`}
            className={styles.navlink}
          >
            <button
              // className={styles.topnavprofilebtn}
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

      {searchedText?.length > 0 && (
        <div className={styles.searchednav}>
          {" "}
          {searchedUser?.length === 0 && <h2>No Users Matched</h2>}
          {searchedUser.map((user) => (
            <SearchedUser user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopNav;

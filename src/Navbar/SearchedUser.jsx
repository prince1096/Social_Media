import React, { useContext } from "react";

import styles from "./SearchedUser.module.css";
import Profile from "../Componets/Profile/Profile";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { Link } from "react-router-dom";

const SearchedUser = ({ user }) => {
  const { dispatch } = useContext(DataUserContext);

  const userHandler = (user) => {
    dispatch({ type: "USER_ON_PROFILE", payload: user });
    dispatch({ type: "SEARCHED", payload: "" });
  };

  return (
    <Link to={`/userprofile/${user?.username}`}>
      <div className={styles.searcheddiv}>
        <div className={styles.imagediv}>
          <button
            className={styles.searchbtn}
            onClick={() => userHandler(user)}
          >
            <Profile
              url={user?.profilePicture}
              height={"40px"}
              width={"40px"}
            />
          </button>
        </div>

        <div>
          <button
            className={styles.searchbtn}
            onClick={() => userHandler(user)}
          >
            <p className={styles.username}>
              {user?.firstName} {user?.lastName}
            </p>
            <p className={styles.username}>{user?.username}</p>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SearchedUser;

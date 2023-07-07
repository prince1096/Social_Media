import React from "react";
import { Link } from "react-router-dom";

import styles from "./SuggestionCard.module.css";
import Profile from "../Componets/Profile/Profile";
import { useContext } from "react";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { followServices } from "../Services/FollowUnfollowService/FollowUnfollowService";

const SuggestionCard = ({ user }) => {
  const { state, dispatch } = useContext(DataUserContext);

  const token = localStorage.getItem("token");

  const userHandler = (user) => {
    dispatch({ type: "USER_ON_PROFILE", payload: user });
    dispatch({ type: "SHOW_FOLLOWER", payload: false });
    dispatch({ type: "SHOW_FOLLOWING", payload: false });
  };

  const { theme } = state;

  return (
    <div key={user?._id} className={styles.usercontainer}>
      <Link to={`/userprofile/${user?.username}`}>
        <button
          className={`${styles.suggestbtn} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
          onClick={() => userHandler(user)}
        >
          <div className={styles.userprofile}>
            <Profile
              url={user?.profilePicture}
              height={"40px"}
              width={"40px"}
            />

            <div className={styles?.namediv}>
              <p>
                {user?.firstName} {user?.lastName}
              </p>
              <p>{user?.username}</p>
            </div>
          </div>
        </button>
      </Link>

      <div>
        <button
          className={`${styles.followbtn} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
          onClick={() => followServices(token, dispatch, user._id)}
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default SuggestionCard;

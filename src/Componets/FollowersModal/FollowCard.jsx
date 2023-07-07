import React from "react";

import { Link } from "react-router-dom";

import styles from "./FollowCard.module.css";
import Profile from "../Profile/Profile";
import { useContext } from "react";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";
import {
  followServices,
  unfollowServices,
} from "../../Services/FollowUnfollowService/FollowUnfollowService";

const FollowCard = ({ user, setShowfollower, setShowfollowing, theme }) => {
  const { state, dispatch } = useContext(DataUserContext);

  const token = localStorage.getItem("token");

  const userHandler = (user) => {
    dispatch({ type: "USER_ON_PROFILE", payload: user });
    setShowfollower(false);
    setShowfollowing(false);
  };

  const findUser = state?.following?.find(
    (users) => users.username === user.username
  );

  const followHandler = () => {
    return findUser
      ? unfollowServices(token, dispatch, user?._id)
      : followServices(token, dispatch, user._id);
  };

  return (
    <div>
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
                {user?.firstName && (
                  <p>
                    {user?.firstName} {user?.lastName}
                  </p>
                )}

                {user?.fullName && <p>{user?.fullName}</p>}

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
            onClick={() => followHandler()}
          >
            {findUser ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FollowCard;

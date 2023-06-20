import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import styles from "./Suggestion.module.css";
import Filter from "../Componets/Filter/Filter";
import Profile from "../Componets/Profile/Profile";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { getUserDataService } from "../Services/user/userServices";
import { followServices } from "../Services/FollowUnfollowService/FollowUnfollowService";

const Suggestion = () => {
  const { state, dispatch } = useContext(DataUserContext);

  // console.log(state?.user);

  const token = localStorage.getItem("token");

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const suggestedUser = state?.user?.filter(
    (users) => users.username !== userData?.username
  );

  // console.log(state?.following);

  const updatedSuggestion = suggestedUser?.filter(
    (user) =>
      !state?.following?.find(
        (followedUser) => followedUser?.username === user?.username
      )
  );

  // console.log(updatedSuggestion);

  // useEffect(() => {
  //   getUserDataService(dispatch, user._id);
  // }, []);

  const userHandler = (user) => {
    // console.log(user);
    dispatch({ type: "USER_ON_PROFILE", payload: user });
  };

  // console.log(updatedSuggestion[0]);

  return (
    <div>
      <div className={styles.suggestioncontainer}>
        <div className={styles.filter}>
          <Filter />
        </div>

        <h2>Suggestions For You</h2>

        <div className={styles.suggestedUser}>
          {updatedSuggestion?.map((user) => (
            <div key={user?._id} className={styles.usercontainer}>
              <Link to={`/userprofile/${user?.username}`}>
                <button
                  className={styles.suggestbtn}
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
                  className={styles.followbtn}
                  onClick={() => followServices(token, dispatch, user._id)}
                >
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;

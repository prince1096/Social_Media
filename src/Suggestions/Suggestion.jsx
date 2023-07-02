import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import styles from "./Suggestion.module.css";
import Filter from "../Componets/Filter/Filter";
import Profile from "../Componets/Profile/Profile";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { getUserDataService } from "../Services/user/userServices";
import { followServices } from "../Services/FollowUnfollowService/FollowUnfollowService";
import SuggestionCard from "./SuggestionCard";

const Suggestion = () => {
  const { state, dispatch } = useContext(DataUserContext);

  // console.log(state?.user);

  // const token = localStorage.getItem("token");

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

  // const userHandler = (user) => {
  //   dispatch({ type: "USER_ON_PROFILE", payload: user });
  // };

  const { theme } = state;

  return (
    <div>
      <div
        // className={styles.suggestioncontainer}
        className={`${styles.suggestioncontainer} ${
          theme ? styles.lighttheme : styles.darktheme
        }`}
      >
        <div className={styles.filter}>
          <Filter />
        </div>

        <h2>Suggestions For You</h2>

        <div className={styles.suggestedUser}>
          {updatedSuggestion?.map((user) => (
            <SuggestionCard user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;

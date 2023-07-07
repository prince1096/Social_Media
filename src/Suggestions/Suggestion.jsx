import React, { useContext } from "react";

import styles from "./Suggestion.module.css";
import Filter from "../Componets/Filter/Filter";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import SuggestionCard from "./SuggestionCard";

const Suggestion = () => {
  const { state } = useContext(DataUserContext);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const suggestedUser = state?.user?.filter(
    (users) => users.username !== userData?.username
  );

  const updatedSuggestion = suggestedUser?.filter(
    (user) =>
      !state?.following?.find(
        (followedUser) => followedUser?.username === user?.username
      )
  );

  const { theme } = state;

  return (
    <div>
      <div
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

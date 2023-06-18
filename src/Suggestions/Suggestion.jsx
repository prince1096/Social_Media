import React, { useContext } from "react";

import { Link } from "react-router-dom";

import styles from "./Suggestion.module.css";
import Filter from "../Componets/Filter/Filter";
import Profile from "../Componets/Profile/Profile";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { getUserDataService } from "../Services/user/userServices";

const Suggestion = () => {
  const { state, dispatch } = useContext(DataUserContext);

  // console.log(state?.user);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const suggestedUser = state?.user?.filter(
    (users) => users.username !== userData?.username
  );

  return (
    <div>
      <div className={styles.suggestioncontainer}>
        <div className={styles.filter}>
          <Filter />
        </div>

        <h2>Suggestions For You</h2>

        <div className={styles.suggestedUser}>
          {suggestedUser?.map((user) => (
            <div key={user?._id} className={styles.usercontainer}>
              <Link to={`/userprofile/${user?.username}`}>
                <button onClick={() => getUserDataService(dispatch, user._id)}>
                  <div className={styles.userprofile}>
                    <Profile />

                    <div>
                      <p>
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p>{user?.username}</p>
                    </div>
                  </div>
                </button>
              </Link>

              <div>
                <button className={styles.followbtn}>Follow</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;

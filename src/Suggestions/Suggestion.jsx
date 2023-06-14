import React, { useContext } from "react";

import styles from "./Suggestion.module.css";
import Filter from "../Componets/Filter/Filter";
import Profile from "../Componets/Profile/Profile";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";

const Suggestion = () => {
  const { state } = useContext(DataUserContext);

  // console.log(state?.user);

  return (
    <div>
      <div className={styles.suggestioncontainer}>
        <div className={styles.filter}>
          <Filter />
        </div>

        <h2>Suggestions For You</h2>

        <div className={styles.suggestedUser}>
          {state?.user?.map((user) => (
            <div key={user?._id} className={styles.usercontainer}>
              <div className={styles.userprofile}>
                {/* <div className={styles.profileimg}></div> */}

                <Profile />

                <div>
                  <p>
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p>{user?.username}</p>
                </div>
              </div>

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

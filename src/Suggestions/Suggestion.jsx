import React, { useEffect, useState } from "react";

import styles from "./Suggestion.module.css";
import Filter from "../Componets/Filter/Filter";

const Suggestion = () => {
  const [allusers, setAllusers] = useState();

  const fetchUsersData = async () => {
    try {
      const response = await fetch("/api/users");

      const data = await response.json();

      console.log(data?.users);
      setAllusers(data?.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <div>
      <div className={styles.suggestioncontainer}>
        <div className={styles.filter}>
          <Filter />
        </div>

        <h2>Suggestions For You</h2>

        <div className={styles.suggestedUser}>
          {allusers?.map((user) => (
            <div key={user?._id} className={styles.usercontainer}>
              <div className={styles.userprofile}>
                <div className={styles.profileimg}></div>

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

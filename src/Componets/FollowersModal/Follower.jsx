import React from "react";

import styles from "./Follower.module.css";
import FollowCard from "./FollowCard";

import { RxCross2 } from "react-icons/rx";

const Follower = ({
  currentaction,
  users,
  setShowfollower,
  setShowfollowing,
  theme,
}) => {
  const crossHandler = () => {
    setShowfollower(false);
    setShowfollowing(false);
  };

  return (
    <div
      className={`${styles.followlist} ${
        theme ? styles.lighttheme : styles.darktheme
      }`}
    >
      <div className={styles.cut}>
        <h2 className={styles.headin}>{currentaction}</h2>
        <button
          className={`${styles.cross} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
          onClick={() => crossHandler()}
        >
          <RxCross2 className={styles.logo} />
        </button>
      </div>
      <hr />

      {users.length === 0 && (
        <h3 className={styles.nothing}>No {currentaction}</h3>
      )}

      <div className={styles.listdiv}>
        {users?.map((user, index) => (
          <FollowCard
            user={user}
            setShowfollowing={setShowfollowing}
            setShowfollower={setShowfollower}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Follower;

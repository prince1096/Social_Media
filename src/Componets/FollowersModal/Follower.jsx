import React from "react";

import styles from "./Follower.module.css";
import FollowCard from "./FollowCard";

const Follower = ({
  currentaction,
  users,
  setShowfollower,
  setShowfollowing,
}) => {
  console.log(users);
  return (
    <div className={styles.followlist}>
      <h2>{currentaction}</h2>
      <div className={styles.listdiv}>
        {users?.map((user, index) => (
          <FollowCard
            user={user}
            setShowfollowing={setShowfollowing}
            setShowfollower={setShowfollower}
          />
        ))}
      </div>
    </div>
  );
};

export default Follower;

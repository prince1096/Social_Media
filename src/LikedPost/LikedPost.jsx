import React, { useContext } from "react";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";

import styles from "./LikedPost.module.css";
import LikedPostDisplay from "./LikedPostDisplay";

const LikedPost = () => {
  const { state } = useContext(DataUserContext);

  // console.log(stat)

  return (
    <div>
      <div>
        <div className={styles.container}>
          {state?.likedPost?.map((post) => (
            <LikedPostDisplay post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LikedPost;

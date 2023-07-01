import React, { useContext } from "react";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";

import styles from "./BookMark.module.css";
// import BookMarkDisplay from "./BookMarkDisplay";
import PostDisplay from "../Componets/PostDisplay/PostDisplay";

const BookMark = () => {
  const { state } = useContext(DataUserContext);

  const bookMarkedPostData = state?.bookmarkPost?.map((postId) =>
    state?.post?.find((post) => post._id === postId)
  );

  return (
    <div>
      <div>
        <div className={styles.container}>
          {bookMarkedPostData?.map((post) => (
            <PostDisplay post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMark;

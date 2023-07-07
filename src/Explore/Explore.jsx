import React, { useContext } from "react";

import styles from "./Explore.module.css";

import PostDisplay from "../Componets/PostDisplay/PostDisplay";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import Filter from "../Componets/Filter/Filter";

const Explore = () => {
  const { state } = useContext(DataUserContext);

  const sortedDatePost =
    state?.sortByDate === "date"
      ? [...state?.post]?.sort((a, b) => {
          console.log("a.createdAt:", a.createdAt);
          console.log("b.createdAt:", b.createdAt);
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      : [...state?.post];

  const sortedLikePost =
    state?.sortByLike === "like"
      ? [
          ...sortedDatePost?.sort(
            (a, b) => b.likes.likeCount - a.likes.likeCount
          ),
        ]
      : [...sortedDatePost];

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.filtermobile}>
          <Filter />
        </div>

        {sortedLikePost?.map((post) => (
          <PostDisplay post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Explore;

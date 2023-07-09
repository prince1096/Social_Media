import React, { useContext, useEffect, useState } from "react";

import styles from "./Scroll.module.css";

import AddPost from "../Componets/AddPost/AddPost";
import Filter from "../Componets/Filter/Filter";
import PostDisplay from "../Componets/PostDisplay/PostDisplay";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import Loader from "../Componets/Loader/Loader";

const Scroll = () => {
  const { state } = useContext(DataUserContext);
  const [isLoading, setIsLoading] = useState(false);

  const followerPost = state?.post?.filter((userpost) =>
    state?.following?.some((user) => user.username === userpost?.username)
  );

  const selfPost = state?.post?.filter(
    (userpost) => userpost?.username === state?.loginUser?.username
  );

  const postOnHomePage = [...followerPost, ...selfPost];

  const postedPage = [...postOnHomePage]?.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const sortedDatePost =
    state?.sortByDate === "date"
      ? [...postedPage]?.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      : [...postedPage];

  const sortedLikePost =
    state?.sortByLike === "like"
      ? [
          ...sortedDatePost?.sort(
            (a, b) => b.likes.likeCount - a.likes.likeCount
          ),
        ]
      : [...sortedDatePost];

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsLoading(true);
    }, 1000);

    return () => clearTimeout(timeId);
  }, []);

  return (
    <div>
      {!isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}

      {isLoading && (
        <div className={styles.container}>
          <div className={styles.addpost}>
            <AddPost />
          </div>

          <div className={styles.filtermobile}>
            <Filter />
          </div>

          {sortedLikePost?.map((post) => (
            <PostDisplay post={post} key={post._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Scroll;

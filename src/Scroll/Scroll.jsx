import React, { useContext, useEffect, useState } from "react";

import styles from "./Scroll.module.css";

import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";

import AddPost from "../Componets/AddPost/AddPost";
import Filter from "../Componets/Filter/Filter";
import PostDisplay from "../Componets/PostDisplay/PostDisplay";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";

const Scroll = () => {
  const { state } = useContext(DataUserContext);

  // console.log(state?.sortByDate);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const followerPost = state?.post?.filter((userpost) =>
    state?.following?.some((user) => user.username === userpost?.username)
  );

  // console.log(postOnHomePage);

  const selfPost = state?.post?.filter(
    (userpost) => userpost?.username === state?.loginUser?.username
  );

  // console.log(state?.loginUser?.username);

  // console.log(selfPost);

  const postOnHomePage = [...followerPost, ...selfPost];

  const sortedDatePost =
    state?.sortByDate === "date"
      ? [...postOnHomePage]?.sort((a, b) => {
          // console.log("a.createdAt:", a.createdAt);
          // console.log("b.createdAt:", b.createdAt);
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      : [...postOnHomePage];

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
    </div>
  );
};

export default Scroll;

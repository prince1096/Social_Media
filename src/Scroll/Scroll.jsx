import React, { useContext, useEffect, useState } from "react";

import styles from "./Scroll.module.css";

import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";

import AddPost from "../Componets/AddPost/AddPost";
import Profile from "../Componets/Profile/Profile";
import PostDisplay from "../Componets/PostDisplay/PostDisplay";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";

const Scroll = () => {
  const { state } = useContext(DataUserContext);

  console.log(state?.sortByDate);

  // const sortedDatePost =
  //   state?.sortByDate === "date"
  //     ? [...state?.post]?.sort(
  //         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //       )
  //     : [...state?.post];

  // const sortedDatePost = [
  //   ...state?.post?.sort(
  //     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  //   ),
  // ];

  const sortedDatePost =
    state?.sortByDate === "date"
      ? [...state?.post]?.sort((a, b) => {
          console.log("a.createdAt:", a.createdAt);
          console.log("b.createdAt:", b.createdAt);
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
      : [...state?.post];

  console.log(sortedDatePost);

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

        {sortedLikePost?.map((post) => (
          <PostDisplay post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Scroll;

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

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.addpost}>
          <AddPost />
        </div>

        {state?.post?.map((post) => (
          <PostDisplay post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
};

export default Scroll;

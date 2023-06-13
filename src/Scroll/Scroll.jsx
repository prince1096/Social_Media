import React, { useEffect, useState } from "react";

import styles from "./Scroll.module.css";

import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";

import AddPost from "../Componets/AddPost/AddPost";
import Profile from "../Componets/Profile/Profile";
import PostDisplay from "../Componets/PostDisplay/PostDisplay";

const Scroll = () => {
  const [newPost, setNewPost] = useState();

  const fetchPost = async () => {
    try {
      const response = await fetch("/api/posts");

      const data = await response.json();

      console.log(data?.posts);
      setNewPost(data?.posts);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.addpost}>
          <AddPost />
        </div>

        {newPost?.map((post) => (
          <PostDisplay post={post} />
        ))}
      </div>
    </div>
  );
};

export default Scroll;

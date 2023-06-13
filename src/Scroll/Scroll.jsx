import React, { useEffect, useState } from "react";

import styles from "./Scroll.module.css";

import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";

import AddPost from "../Componets/AddPost/AddPost";
import Profile from "../Componets/Profile/Profile";

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
          <div className={styles.postcard}>
            <div className={styles.username}>
              <div className={styles.profile}>
                <div>
                  <Profile />
                </div>

                <div>
                  <p>
                    <strong>XYZ</strong>
                  </p>
                  <p>@{post?.username}</p>
                </div>
              </div>

              <div>
                <button className={styles.profilebtn}>
                  <BsThreeDots />
                </button>
              </div>
            </div>

            <div>{post?.content}</div>
            <div className={styles.bottomlogo}>
              <div className={styles.likelogo}>
                {" "}
                <span className={styles.heart}>
                  <AiOutlineHeart />
                </span>{" "}
                <span>
                  <FaRegComment />
                </span>
                <span>
                  <LuShare2 />
                </span>
              </div>

              <div>
                <FaRegBookmark />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scroll;

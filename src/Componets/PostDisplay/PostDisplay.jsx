import React from "react";

import { useState } from "react";

import styles from "./PostDisplay.module.css";

import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { LuShare2 } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import Profile from "../Profile/Profile";
import Edit from "./Edit";

const PostDisplay = ({ post }) => {
  const [showEdit, setShowEdit] = useState(false);

  const editHandler = () => {
    setShowEdit(!showEdit);
  };

  return (
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
          <button className={styles.profilebtn} onClick={() => editHandler()}>
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

      {showEdit && (
        <div className={styles.show}>
          <Edit />
        </div>
      )}
    </div>
  );
};

export default PostDisplay;

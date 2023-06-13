import React from "react";

import styles from "./AddPost.module.css";

import { BsImageFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Profile from "../Profile/Profile";

const AddPost = () => {
  return (
    <div className={styles.addpostcontainer}>
      <div className={styles.addpost}>
        <div>
          {/* <div className={styles.userprofile}></div> */}
          <Profile />
        </div>
        <div className={styles.textareadiv}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            className={styles.textarea}
            placeholder="What's Happening"
          ></textarea>
        </div>
      </div>

      <div className={styles.adddata}>
        <div>
          {" "}
          <BsImageFill className={styles.postlogo} />{" "}
          <BsFillEmojiSmileFill className={styles.postlogo} />{" "}
        </div>

        <div>
          <button className={styles.button}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;

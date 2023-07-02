import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./EditPost.module.css";

import { BsImageFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Profile from "../Profile/Profile";
import { editPostService } from "../../Services/Post/postServices";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const EditPost = ({ showEdit, setShowEdit, token, postData, dispatch }) => {
  const [editPost, setEditPost] = useState({ ...postData });

  const { state } = useContext(DataUserContext);

  const handleTextareaChange = (event) => {};

  // console.log(newPost);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const currentUser = state?.user?.find(
    (userr) => userr?.username === userData?.username
  );

  const updateHandler = () => {
    editPostService(token, dispatch, editPost);
    setShowEdit(false);
  };

  // console.log(editPost);
  const { theme } = state;

  return (
    <div>
      <div className={styles.overlay} onClick={() => setShowEdit(false)}></div>

      <div
        //  className={styles.addpostcontainer}

        className={`${styles.addpostcontainer} ${
          theme ? styles.lighttheme : styles.darktheme
        }`}
      >
        <div
          // className={styles.addpost}
          className={`${styles.addpost} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          {/* <div> */}
          {/* <div className={styles.userprofile}></div> */}
          <Profile
            url={currentUser?.profilePicture}
            height={"60px"}
            width={"60px"}
          />
          {/* </div> */}
          <div className={styles.textareadiv}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className={styles.textarea}
              value={editPost?.content}
              placeholder="What's Happening"
              // onChange={() => addPostHandler(event)}
              onChange={(event) =>
                setEditPost({ ...editPost, content: event.target.value })
              }
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
            <button onClick={() => updateHandler()} className={styles.button}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;

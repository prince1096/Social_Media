import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./EditPost.module.css";

import { BsImageFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Profile from "../Profile/Profile";
import { editPostService } from "../../Services/Post/postServices";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const EditPost = ({ showEdit, setShowEdit }) => {
  const [newPost, setNewPost] = useState("");

  const token = localStorage.getItem("token");
  const { state, dispatch } = useContext(DataUserContext);

  const handleTextareaChange = (event) => {
    setNewPost(event.target.value);
  };

  // console.log(newPost);

  const backendpost = {
    id: uuid(),
    content: newPost,
  };

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const currentUser = state?.user?.find(
    (userr) => userr?.username === userData?.username
  );

  return (
    <div>
      <div className={styles.overlay} onClick={() => setShowEdit(false)}></div>

      <div className={styles.addpostcontainer}>
        <div className={styles.addpost}>
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
              value={newPost}
              placeholder="What's Happening"
              // onChange={() => addPostHandler(event)}
              onChange={handleTextareaChange}
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
            <button
              onClick={() => editPostService(token, dispatch, backendpost)}
              className={styles.button}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;

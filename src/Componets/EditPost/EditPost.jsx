import React, { useContext, useState } from "react";

import styles from "./EditPost.module.css";

import { BsImageFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import Profile from "../Profile/Profile";
import { editPostService } from "../../Services/Post/postServices";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

const EditPost = ({ showEdit, setShowEdit, token, postData, dispatch }) => {
  const [editPost, setEditPost] = useState({ ...postData });

  const { state } = useContext(DataUserContext);

  const userInformation = localStorage.getItem("userInformation");
  const userData = JSON.parse(userInformation);

  const currentUser = state?.user?.find(
    (userr) => userr?.username === userData?.username
  );

  const fileUploadHandle = (event) => {
    const file = event.target.files[0];
    const uploadedFile = URL.createObjectURL(file);
    console.log(uploadedFile);
    setEditPost({ ...editPost, mediaURL: uploadedFile });
  };

  const updateHandler = () => {
    editPostService(token, dispatch, editPost);
    setShowEdit(false);
  };

  const { theme } = state;

  return (
    <div>
      <div className={styles.overlay} onClick={() => setShowEdit(false)}></div>

      <div
        className={`${styles.addpostcontainer} ${
          theme ? styles.lighttheme : styles.darktheme
        }`}
      >
        <div
          className={`${styles.addpost} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          <Profile
            url={currentUser?.profilePicture}
            height={"60px"}
            width={"60px"}
          />
          <div className={styles.textareadiv}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className={`${styles.textarea} ${
                theme ? styles.lighttheme : styles.darkthemetext
              }`}
              value={editPost?.content}
              placeholder="What's Happening"
              onChange={(event) =>
                setEditPost({ ...editPost, content: event.target.value })
              }
            ></textarea>
          </div>
        </div>

        <div className={styles.adddata}>
          <div>
            {" "}
            <div className={styles.labelcontainer}>
              <label htmlFor="url">
                <BsImageFill className={styles.postlogo} />
              </label>
              <input
                type="file"
                className={styles.inputurl}
                name=""
                id="url"
                onChange={(event) => fileUploadHandle(event)}
              />
            </div>
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

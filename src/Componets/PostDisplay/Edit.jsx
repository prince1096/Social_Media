import React, { useState } from "react";

import styles from "./PostDisplay.module.css";
import { deletePostService } from "../../Services/Post/postServices";
import EditPost from "../EditPost/EditPost";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Edit = ({ postData, token, dispatch, theme }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div
      className={`${styles.editpostcontainer} ${
        theme ? styles.lighttheme : styles.darkthemecontainer
      }`}
    >
      <div>
        <button
          className={`${styles.editbtn} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
          onClick={() => setShowEdit(true)}
        >
          <AiFillEdit /> Edit
        </button>
      </div>

      <div>
        <button
          onClick={() => deletePostService(token, dispatch, postData._id)}
          className={`${styles.deletebtn} ${
            theme ? styles.lighttheme : styles.darktheme
          }`}
        >
          <AiFillDelete />
          Delete
        </button>
      </div>

      {showEdit && (
        <EditPost
          postData={postData}
          token={token}
          dispatch={dispatch}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      )}
    </div>
  );
};

export default Edit;

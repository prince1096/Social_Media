import React from "react";

import styles from "./PostDisplay.module.css";
import { deletePostService } from "../../Services/Post/postServices";

const Edit = ({ postData, token, dispatch }) => {
  return (
    <div className={styles.editpostcontainer}>
      <div>
        <button className={styles.editbtn}>Edit</button>
      </div>

      <div>
        <button
          onClick={() => deletePostService(token, dispatch, postData._id)}
          className={styles.deletebtn}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Edit;

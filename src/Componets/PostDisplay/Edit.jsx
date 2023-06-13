import React from "react";

import styles from "./PostDisplay.module.css";

const Edit = () => {
  return (
    <div className={styles.editpostcontainer}>
      <div>
        <button className={styles.editbtn}>Edit</button>
      </div>

      <div>
        <button className={styles.deletebtn}>Delete</button>
      </div>
    </div>
  );
};

export default Edit;

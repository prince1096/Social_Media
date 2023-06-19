import React, { useState } from "react";

import styles from "./NavAdd.module.css";
import AddPost from "../AddPost/AddPost";

const NavAdd = ({ setShowModal }) => {
  return (
    <div>
      <AddPost setShowModal={setShowModal} />
    </div>
  );
};

export default NavAdd;

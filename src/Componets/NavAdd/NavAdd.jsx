import React from "react";

import AddPost from "../AddPost/AddPost";

const NavAdd = ({ setShowModal }) => {
  return (
    <div>
      <AddPost setShowModal={setShowModal} />
    </div>
  );
};

export default NavAdd;

import React, { useContext } from "react";
import { DataUserContext } from "../Context/DataUser/DataUserProvider";
import { useParams } from "react-router";

const UserProfile = () => {
  const { state, dispatch } = useContext(DataUserContext);

  const { username } = useParams();

  return <div>UserProfile</div>;
};

export default UserProfile;

import axios from "axios";
import { useContext } from "react";
import { DataUserContext } from "../../Context/DataUser/DataUserProvider";

export const likePostServices = async (token, dispatch, post) => {
  try {
    const response = await axios.post(
      `/api/posts/like/${post._id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    console.log(response);
    console.log(response?.data?.posts);

    dispatch({ type: "LIKEDPOST", payload: post });

    // const likedPost =
  } catch (error) {
    console.log(error);
  }
};

export const unlikePostServices = async (post, dispatch, token) => {
  try {
    const response = await axios.post(
      `/api/posts/dislike/${post._id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    dispatch({ type: "UNLIKEDPOST", payload: post });
  } catch (error) {
    console.log(error);
  }
};

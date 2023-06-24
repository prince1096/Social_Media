import axios from "axios";
// import { redirect } from "react-router";

export const getAllPostService = async (dispatch) => {
  try {
    const postdata = await axios.get("/api/posts");

    dispatch({ type: "ALL_POST_DATA", payload: postdata?.data?.posts });
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePostService = async (post, dispatch) => {
  try {
    const response = await axios.get(`/api/posts/${post._id}`);

    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const getUserPostService = async (dispatch, users) => {
  // console.log(users);
  try {
    const response = await axios.get(`/api/posts/user/${users?.username}`);

    console.log(response);

    dispatch({ type: "USER_POST", payload: response?.data?.posts });
  } catch (error) {
    console.log(error);
  }
};

export const createNewPostService = async (token, dispatch, post) => {
  try {
    const response = await axios.post(
      "/api/posts",
      {
        postData: post,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deletePostService = async (token, dispatch, postId) => {
  try {
    const response = await axios.delete(`/api/posts/${postId}`, {
      headers: {
        authorization: token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const editPostService = async (token, dispatch, postData) => {
  try {
    const response = await axios.post(
      `/api/posts/edit/${postData._id}`,
      {
        postData,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

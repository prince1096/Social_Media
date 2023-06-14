import axios from "axios";

export const getAllPostService = async (dispatch) => {
  try {
    const postdata = await axios("api/posts");

    // console.log(postdata?.data);

    dispatch({ type: "ALL_POST_DATA", payload: postdata?.data?.posts });
  } catch (error) {
    console.log(error);
  }
};

export const getSinglePostService = async (post, dispatch) => {
  try {
    const response = await axios(`/api/posts/${post._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const getUserPostService = async (username) => {
  try {
    const response = await axios(`/api/posts/user/${username}`);
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
  } catch (error) {
    console.log(error);
  }
};

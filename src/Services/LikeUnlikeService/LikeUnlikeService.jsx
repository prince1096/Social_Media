import axios from "axios";

export const likePostServices = async (post, dispatch, token) => {
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
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";

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

    const totalPosts = [...response?.data?.posts];

    const findPost = totalPosts?.find((newPost) => newPost.id === post.id);

    dispatch({ type: "LIKEDPOST", payload: findPost });
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

    const totalPosts = [...response?.data?.posts];

    const findPost = totalPosts?.find((newPost) => newPost.id === post.id);

    dispatch({ type: "UNLIKEDPOST", payload: findPost });
  } catch (error) {
    console.log(error);
  }
};

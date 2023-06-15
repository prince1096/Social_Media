import axios from "axios";

export const addToBookmarkServices = async (token, dispatch, post) => {
  try {
    const response = await axios.post(
      `/api/users/bookmark/${post._id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    console.log(response);

    console.log(response?.data?.bookmarks);

    dispatch({ type: "BOOKMARK_DATA", action: response?.data?.bookmarks });
  } catch (error) {
    console.log(error);
  }
};

export const removeFromBookmarkServices = async (token, dispatch, post) => {
  try {
    const response = await axios.post(
      `/api/users/remove-bookmark/${post._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    dispatch({ type: "BOOKMARK_DATA", action: response?.data?.bookmark });
  } catch (error) {
    console.log(error);
  }
};

export const getBookMarkDataServices = async (dispatch, token) => {
  try {
    const response = await axios("/api/users/bookmark", {
      headers: {
        authorization: token,
      },
    });

    // console.log(response?.data?.bookmarks);

    dispatch({ type: "BOOKMARK_DATA", payload: response?.data?.bookmarks });
  } catch (error) {
    console.log(error);
  }
};

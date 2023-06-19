import axios from "axios";

export const followServices = async (token, dispatch, followId) => {
  try {
    const response = await axios.post(
      `/api/users/follow/${followId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    // console.log(response?.data);

    dispatch({
      type: "FOLLOW",
      payload: response?.data?.followUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const unfollowServices = async (token, dispatch, unfollowId) => {
  try {
    const response = await axios.post(
      `/api/users/unfollow/${unfollowId}`,
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

import axios from "axios";

export const getAllPostService = async (dispatch) => {
  try {
    const postdata = await axios("api/posts");

    console.log(postdata?.data);

    dispatch({ type: "ALL_POST_DATA", payload: postdata?.data?.posts });
  } catch (error) {
    console.log(error);
  }
};

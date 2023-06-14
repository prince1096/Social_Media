import axios from "axios";

export const getAllUserDataService = async (dispatch) => {
  try {
    const data = await axios("/api/users");

    console.log(data?.data);

    dispatch({ type: "USER_DATA", payload: data?.data?.users });
  } catch (error) {
    console.log(error);
  }
};

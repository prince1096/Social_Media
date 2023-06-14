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

export const getUserDataService = async (dispatch, userId) => {
  try {
    const userdata = await axios(`/api/users/${userId}`);
  } catch (error) {
    console.log(error);
  }
};

export const editUserService = async (token, dispatch, userData) => {
  try {
    const user = await axios.post(
      "/api/users/edit",
      { userData },
      { headers: { authorization: token } }
    );
  } catch (error) {
    console.log(error);
  }
};

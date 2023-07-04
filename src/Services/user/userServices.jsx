import axios from "axios";

export const getAllUserDataService = async (dispatch) => {
  try {
    const data = await axios.get("/api/users");
    dispatch({ type: "USER_DATA", payload: data?.data?.users });
  } catch (error) {
    console.log(error);
  }
};

export const getUserDataService = async (dispatch, userId) => {
  console.log(userId);
  try {
    const response = await axios.get(`/api/users/${userId}`);

    // const response = await axios.get(`/api/users/102`);

    dispatch({ type: "CURRENT_PROFILE", payload: response?.data?.user });
  } catch (error) {
    console.log(error);
  }
};

export const editUserService = async (token, dispatch, userData) => {
  try {
    const response = await axios.post(
      "/api/users/edit",
      { userData: userData },
      { headers: { authorization: token } }
    );

    console.log(response);

    // localStorage.setItem(
    //   "userInformation",
    //   JSON.stringify(response?.data?.user)
    // );

    dispatch({ type: "UPDATED_USER", payload: response?.data?.user });
    dispatch({ type: "STORY", payload: response?.data?.user?.status });
  } catch (error) {
    console.log(error);
  }
};

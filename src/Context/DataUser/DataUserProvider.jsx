import React, { createContext, useEffect, useReducer } from "react";

// import axios from "axios";
import {
  getAllUserDataService,
  getUserDataService,
} from "../../Services/user/userServices";
import {
  getAllPostService,
  getUserPostService,
} from "../../Services/Post/postServices";
import { getBookMarkDataServices } from "../../Services/BookMarkService/BookMarkService";
import { useParams } from "react-router";

export const DataUserContext = createContext();

const userInformation = localStorage.getItem("userInformation");
const userData = JSON.parse(userInformation);

const initialState = {
  user: [],
  loginUser: "",
  post: [],
  bookmarkPost: [],
  likedPost: [],
  sortByDate: "",
  sortByLike: "",
  userPost: [],
  currentprofile: "",
  homepagePost: [],
  following: [],
  follower: [],
  // userOnProfile: { ...userData },
  userOnProfile: "",
  showModal: false,
};

const DataUserProvider = ({ children }) => {
  const datareducerFunction = (state, action) => {
    switch (action.type) {
      case "USER_DATA":
        return { ...state, user: action.payload };

      case "LOGIN_USER":
        return { ...state, user: action.payload };

      case "ALL_POST_DATA":
        return { ...state, post: action.payload };

      case "CURRENT_PROFILE":
        return { ...state, currentprofile: action.payload };

      case "FOLLOW":
        return { ...state, following: [...state?.following, action.payload] };

      case "UNFOLLOW":
        return { ...state, following: action.payload };

      case "USER_ON_PROFILE":
        return { ...state, userOnProfile: action.payload };

      case "BOOKMARK_DATA":
        return {
          ...state,
          bookmarkPost: action.payload,
        };

      case "REMOVE_BOOKMARKPOST":
        return {
          ...state,

          bookmarkPost: [...action.payload],
        };

      case "LIKEDPOST":
        return { ...state, likedPost: [...state?.likedPost, action.payload] };

      case "UNLIKEDPOST":
        return {
          ...state,
          likedPost: state?.likedPost?.filter(
            (post) => post._id !== action.payload._id
          ),
        };

      case "SORT_BY_DATE":
        return {
          ...state,
          sortByDate: action.payload,
        };

      case "SORT_BY_LIKE":
        return {
          ...state,
          sortByLike: action.payload,
        };

      case "USER_POST":
        return {
          ...state,
          userPost: action.payload,
        };

      case "SHOW_MODAL":
        return {
          ...state,
          showModal: true,
        };

      case "HIDE_MODAL":
        return {
          ...state,
          showModal: false,
        };

      default:
        return { ...state };
    }
  };

  const token = localStorage.getItem("token");

  const [state, dispatch] = useReducer(datareducerFunction, initialState);

  const { username } = useParams();

  useEffect(() => {
    (async () => {
      await getAllUserDataService(dispatch);
    })();
  }, [state?.user]);

  useEffect(() => {
    (async () => {
      await getAllPostService(dispatch);
    })();
  }, [state?.post]);

  useEffect(() => {
    getBookMarkDataServices(dispatch, token);
  }, [state?.bookmarkPost]);

  // console.log(state?.userOnProfile);

  // useEffect(() => {
  //   getUserDataService(dispatch, state?.userOnProfile?._id);
  //   // getUserPostService(dispatch, state?.currentprofile);
  // }, [state?.userOnProfile]);

  // useEffect(() => {
  //   (async () => {
  //     await getUserDataService(dispatch, username);
  //     await getUserPostService(dispatch, state?.currentprofile);
  //   })();
  //   // getUserDataService(dispatch, userprofileData._id);
  //   // getUserPostService(dispatch, state?.currentprofile);
  // }, [state?.currentprofile]);

  // console.log(state?.following);

  return (
    <div>
      <DataUserContext.Provider value={{ state, dispatch }}>
        {children}
      </DataUserContext.Provider>
    </div>
  );
};

export default DataUserProvider;

import React, { createContext, useEffect, useReducer } from "react";

import { getAllUserDataService } from "../../Services/user/userServices";
import { getAllPostService } from "../../Services/Post/postServices";
import { getBookMarkDataServices } from "../../Services/BookMarkService/BookMarkService";

export const DataUserContext = createContext();

const userInformation = localStorage.getItem("userInformation");
const userData = JSON.parse(userInformation);

const initialState = {
  user: [],
  loginUser: { ...userData },
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
  userOnProfile: "",
  showModal: false,
  showProfile: false,
  searchedText: "",
  theme: true,
  stories: [],
};

const DataUserProvider = ({ children }) => {
  const datareducerFunction = (state, action) => {
    switch (action.type) {
      case "USER_DATA":
        return { ...state, user: action.payload };

      case "LOGIN_USER":
        return { ...state, user: action.payload };

      case "UPDATED_USER":
        return { ...state, loginUser: { ...action.payload } };

      case "ALL_POST_DATA":
        return { ...state, post: action.payload };

      case "CURRENT_PROFILE":
        return { ...state, currentprofile: action.payload };

      case "FOLLOW":
        return { ...state, following: [...state?.following, action.payload] };

      case "UNFOLLOW":
        return {
          ...state,
          following: state?.following?.filter(
            (users) => users.username !== action?.payload?.username
          ),
        };

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

      case "STORY":
        return { ...state, stories: action.payload };

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

      case "SHOW_EDITPROFILE_MODAL":
        return {
          ...state,
          showProfile: action.payload,
        };

      case "HIDE_EDITPROFILE_MODAL":
        return {
          ...state,
          showProfile: false,
        };

      case "SEARCHED":
        return {
          ...state,
          searchedText: action.payload,
        };

      case "THEME":
        return { ...state, theme: action.payload };

      case "LOGINDATA":
        return { ...state, loginUser: action.payload };

      default:
        return { ...state };
    }
  };

  const token = localStorage.getItem("token");

  const [state, dispatch] = useReducer(datareducerFunction, initialState);

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

  return (
    <div>
      <DataUserContext.Provider value={{ state, dispatch }}>
        {children}
      </DataUserContext.Provider>
    </div>
  );
};

export default DataUserProvider;

import React, { createContext, useEffect, useReducer } from "react";

// import axios from "axios";
import { getAllUserDataService } from "../../Services/user/userServices";
import { getAllPostService } from "../../Services/Post/postServices";
import { getBookMarkDataServices } from "../../Services/BookMarkService/BookMarkService";

export const DataUserContext = createContext();

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

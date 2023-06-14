import React, { createContext, useEffect, useReducer } from "react";

// import axios from "axios";
import { getAllUserDataService } from "../../Services/user/userServices";
import { getAllPostService } from "../../Services/Post/postServices";
import { getBookMarkDataServices } from "../../Services/BookMarkService/BookMarkService";

export const DataUserContext = createContext();

const initialState = {
  user: [],
  post: [],
  bookmarkPost: [],
  likedPost: [],
};

const DataUserProvider = ({ children }) => {
  const datareducerFunction = (state, action) => {
    switch (action.type) {
      case "USER_DATA":
        return { ...state, user: action.payload };

      case "ALL_POST_DATA":
        return { ...state, post: action.payload };

      case "BOOKMARK_DATA":
        return { ...state, bookmarkPost: action.payload };

      default:
        return { ...state };
    }
  };

  const token = localStorage.getItem("token");

  const [state, dispatch] = useReducer(datareducerFunction, initialState);

  useEffect(() => {
    getAllUserDataService(dispatch);
  }, []);

  useEffect(() => {
    getAllPostService(dispatch);
  }, []);

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

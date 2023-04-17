import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const commentContext = createContext();
export const useComment = () => useContext(commentContext);
const CommentContextProvider = ({ children }) => {
  const API = "http://34.107.92.21";

  const [comments, setComments] = useState(null);

  const getComments = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      let res = await axios.get(`${API}/comments/`, config);
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createComment = async (comment) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/comments/`, comment, config);
      getComments();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteComment = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/comments/${id}/`, config);
      getComments();
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    deleteComment,
    createComment,
    getComments,
    comments,
    setComments,
  };
  return (
    <commentContext.Provider value={values}>{children}</commentContext.Provider>
  );
};

export default CommentContextProvider;

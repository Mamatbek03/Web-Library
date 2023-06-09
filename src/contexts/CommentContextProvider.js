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
  const deleteComment = (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      axios.delete(`${API}/comments/${id}/`, config);
    } catch (error) {
      console.log(error);
    }
  };
  const editComment = async (comment) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      axios.put(`${API}/comments/${comment.id}/`, comment, config);
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    editComment,
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

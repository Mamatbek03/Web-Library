import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext();

export const useProducts = () => useContext(productContext);

const ProductContextProvider = ({ children }) => {
  const API = "http://34.107.92.21";
  const navigate = useNavigate();

  const INIT_STATE = {
    products: [],
    categories: [],
    pages: 0,
    oneProduct: null,
  };
  function reducer(state = INIT_STATE, action) {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload.results,
          pages: Math.ceil(action.payload.count / 6),
        };
      case "GET_CATEGORIES":
        return { ...state, categories: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getProducts = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(
        `${API}/posts/${window.location.search}`,
        config
      );
      console.log(res);
      dispatch({ type: "GET_PRODUCTS", payload: res.data });
    } catch (error) {}
  };
  const getCategories = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/category/`, config);
      console.log(res);

      dispatch({ type: "GET_CATEGORIES", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (newProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/posts/`, newProduct, config);
      navigate("/product-list");
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/posts/${id}/`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const getOneProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/posts/${id}/`, config);
      dispatch({ type: "GET_ONE_PRODUCT", payload: res.data });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const updateProduct = async (id, editedProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.patch(`${API}/posts/${id}/`, editedProduct, config);
      navigate("/product-list");
    } catch (error) {
      console.log(error);
    }
  };
  const postLike = async (formData) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/likes/`, formData, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const deleteLike = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/likes/${id}`, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };
  const showProductDetails = async (formData) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.post(`${API}/favorites/`, formData, config);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    showProductDetails,
    deleteLike,
    postLike,
    updateProduct,
    oneProduct: state.oneProduct,
    getOneProduct,
    deleteProduct,
    createProduct,
    getCategories,
    categories: state.categories,
    products: state.products,
    getProducts,
    pages: state.pages,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;

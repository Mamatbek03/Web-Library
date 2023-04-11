import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API } from "../helpers/consts";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  categories: {},
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };

    default:
      return state;
  }
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await axios.get(`${API}/${window.location.search}`);
    dispatch({ type: "GET_PRODUCTS", payload: res.data });
  };

  const getCategories = async (id) => {
    const res = await axios.get(`${API}/${id}`);
    dispatch({ type: "GET_CATEGORIES", payload: res.data.results });
  };

  const createProduct = async (newProduct) => {
    await axios.post(API, newProduct);
    getProducts();
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}/`);
    getProducts();
  };

  const updateProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}/`, editedProduct);
    navigate("/products");
  };
  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;

    navigate(url);
  };

  const values = {
    updateProduct,
    products: state.products,
    getProducts,
    deleteProduct,
    createProduct,
    getCategories,
    fetchByParams,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};
export default ProductContextProvider;

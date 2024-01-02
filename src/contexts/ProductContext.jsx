import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducer";

const ProductContext = createContext();

const API_URL = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  isSingleError: false,
  singleProduct: {},
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProductData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const Products = await res.data;
      // console.log(Products);
      dispatch({ type: "SET_API_DATA", payload: Products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProductData = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProductData = res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT_DATA", payload: singleProductData });
    } catch(error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  }

  useEffect(() => {
    getProductData(API_URL);
  }, []);

  return (
    <ProductContext.Provider value={{...state, getSingleProductData}}>{children}</ProductContext.Provider>
  );
};

const useProduct = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductContextProvider, useProduct };

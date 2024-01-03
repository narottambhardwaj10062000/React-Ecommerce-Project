import { createContext, useEffect, useReducer, useContext } from "react";
import { useProduct } from "./ProductContext";
import reducer from "../reducers/FilterProductReducer";

const FilterProductContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
};

const FilterProductContextProvider = ({ children }) => {
  const { products } = useProduct();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  useEffect(
    () => dispatch({ type: "SET_FILTER_PRODUCT_DATA", payload: products }),
    [products]
  );

  // console.log(state.allProducts);

  return (
    <FilterProductContext.Provider value={{ ...state }}>
      {children}
    </FilterProductContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterProductContext);
};

export { FilterProductContextProvider, useFilterContext };

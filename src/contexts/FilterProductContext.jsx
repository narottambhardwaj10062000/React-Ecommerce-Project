import { createContext, useEffect, useReducer, useContext } from "react";
import { useProduct } from "./ProductContext";
import reducer from "../reducers/FilterProductReducer";

const FilterProductContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "a-z",
  filters: {
    text: "",
  }
};

const FilterProductContextProvider = ({ children }) => {
  const { products } = useProduct();

  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    dispatch({ type: "SET_LIST_VIEW" });
  };

  const sorting = (e) => {
    const userSelectedValue = e.target.value;
    dispatch({ type: "GET_SORT_VALUE" , payload: userSelectedValue });
  }

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value }});
  }

  useEffect(
    () => dispatch({ type: "SET_FILTER_PRODUCT_DATA", payload: products }),
    [products]
  );

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS"});
  }, [state.sortingValue]);

  useEffect(() => {
    dispatch({ type: "UPDATE_FILTER_PRODUCT_VALUE"})
  }, [state.filters.text]);

  // console.log(state.allProducts);

  return (
    <FilterProductContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue }} >
      {children}
    </FilterProductContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterProductContext);
};

export { FilterProductContextProvider, useFilterContext };

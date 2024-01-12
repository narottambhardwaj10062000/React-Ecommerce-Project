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
    category: "All",
    company: "All",
    color: "All",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
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

  // console.log(state.sortingValue);

  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value }});
  }

  // console.log( state.filters.company );
  useEffect(
    () => dispatch({ type: "SET_FILTER_PRODUCT_DATA", payload: products }),
    [products]
  );

  console.log(state.price);

  const clearFilters = () => {
    dispatch({ type: "CLEAR_ALL_FILTERS"});
  }

  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS"});
  }, [state.sortingValue]);

  useEffect(() => {
    dispatch({ type: "UPDATE_FILTER_PRODUCT_VALUE" });
  }, [state.filters]);

  return (
    <FilterProductContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}} >
      {children}
    </FilterProductContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterProductContext);
};

export { FilterProductContextProvider, useFilterContext };

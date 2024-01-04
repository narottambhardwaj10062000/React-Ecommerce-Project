const FilterProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILTER_PRODUCT_DATA":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        gridView: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        gridView: false,
      };


    default:
      return state;


  }
};

export default FilterProductReducer;

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

    case "GET_SORT_VALUE":

      let userSortValue = document.getElementById("sort"); 
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_value);

      return {
        ...state,
        sortingValue: sort_value,
      }

    case  "SORTING_PRODUCTS":

      let newSortData;
      let tempSortData = [...action.payload];

      if (state.sortingValue === "a-z") {
        newSortData = tempSortData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }

      if (state.sortingValue === "z-a") {
        newSortData = tempSortData.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      if (state.sortingValue === "lowest") {
        newSortData = tempSortData.sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (state.sortingValue === "highest") {
        newSortData = tempSortData.sort((a, b) => {
          return b.price - a.price;
        });
      }

     return {
       ...state,
       filterProducts: newSortData,
     }


    default:
      return state;


  }
};

export default FilterProductReducer;

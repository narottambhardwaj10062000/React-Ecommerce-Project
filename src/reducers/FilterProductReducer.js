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

      // let userSortValue = document.getElementById("sort"); 
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      // console.log(sort_value);

      return {
        ...state,
        sortingValue: action.payload,
      }

    case  "SORTING_PRODUCTS":

      let newSortData;
      const { filterProducts } = state;
      let tempSortData = [...filterProducts];
      const { sortingValue } = state;


      const comparator = (a, b) => {
        if( sortingValue === "a-z" ) {
          return a.name.localeCompare(b.name);
        }

        if( sortingValue === "z-a" ) {
          return b.name.localeCompare(a.name);
        }

        if( sortingValue === "lowest" ) {
          return a.price - b.price;
        }

        if( sortingValue === "highest" ) {
          return b.price - a.price;
        }
      }

      newSortData = tempSortData.sort(comparator);

     return {
       ...state,
       filterProducts: newSortData,
     }


    default:
      return state;
      
  }
};

export default FilterProductReducer;

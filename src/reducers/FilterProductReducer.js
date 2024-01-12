const FilterProductReducer = (state, action) => {
  let { allProducts } = state;

  switch (action.type) {
    case "SET_FILTER_PRODUCT_DATA":

      let priceArray = action.payload.map((currElem) => {
        return currElem.price;
      })

      let maximum = Math.max(...priceArray);


      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maximum,
          price: maximum,
        }
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
      return {
        ...state,
        sortingValue: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filterProducts } = state;
      let tempSortData = [...filterProducts];
      const { sortingValue } = state;

      const comparator = (a, b) => {
        if (sortingValue === "a-z") {
          return a.name.localeCompare(b.name);
        }

        if (sortingValue === "z-a") {
          return b.name.localeCompare(a.name);
        }

        if (sortingValue === "lowest") {
          return a.price - b.price;
        }

        if (sortingValue === "highest") {
          return b.price - a.price;
        }
      };

      newSortData = tempSortData.sort(comparator);

      return {
        ...state,
        filterProducts: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "UPDATE_FILTER_PRODUCT_VALUE":
      // const { allProducts } = state;
      const { text, category, company, color, price } = state.filters;
      let newFilterProductsValue = [...allProducts];

      if (text) {
        newFilterProductsValue = newFilterProductsValue.filter((currElem) => {
          return currElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        newFilterProductsValue = newFilterProductsValue.filter((currElem) => {
          return currElem.category === category;
        });
      }

      if (company !== "All") {
        newFilterProductsValue = newFilterProductsValue.filter((currElem) => {
          return currElem.company === company;
        });
      }

      if (color !== "All") {
        newFilterProductsValue = newFilterProductsValue.filter((currElem) => {
          return currElem.colors.includes(color);
        });
      }

      if(price) {
        if(price === 0){
          newFilterProductsValue = newFilterProductsValue.filter((currElem) => {
            return currElem.price === price;
          })
        }
        else{
          newFilterProductsValue = newFilterProductsValue.filter((currElem) => {
            return currElem.price <= price;
          })
        }
      }

      return {
        ...state,
        filterProducts: newFilterProductsValue,
      };

    default:
      return state;
  }
};

export default FilterProductReducer;

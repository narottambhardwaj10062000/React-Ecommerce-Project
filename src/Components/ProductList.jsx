import React from "react";
import { useFilterContext } from "../contexts/FilterProductContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filterProducts, gridView } = useFilterContext();

  // console.log(filterProducts);
  // console.log(gridView);

  if (gridView === true) {
    return <GridView product={filterProducts} />;
  }

  if (gridView === false) {
    return <ListView product={filterProducts} />;
  }
};

export default ProductList;

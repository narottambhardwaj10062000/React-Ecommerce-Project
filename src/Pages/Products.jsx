import React from "react";
import { useFilterContext } from "../contexts/FilterProductContext";
import ProductList from "../Components/ProductList";
import Sort from "../Components/Sort";
import FilterSection from "../Components/FilterSection";
import styled from "styled-components";

const Products = () => {
  const { filterProducts, allProducts } = useFilterContext();

  // console.log( filterProducts );

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>

          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
`;

export default Products;

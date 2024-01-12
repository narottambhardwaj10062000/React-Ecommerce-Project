import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../contexts/FilterProductContext";
import { FaCheck } from "react-icons/fa";

const FilterSection = () => {
  const {
    filters: { text, category, color },
    updateFilterValue,
    allProducts,
  } = useFilterContext();

  const getUniqueData = (data, filterName) => {
    let allUniqueData = data.map((currElem) => {
      return currElem[filterName];
    });

    if (filterName === "colors") {
      return (allUniqueData = ["All", ...new Set([].concat(...allUniqueData))]);
    }

    return (allUniqueData = ["All", ...new Set(allUniqueData)]);
  };

  const allUniqueCategories = getUniqueData(allProducts, "category");
  const allUniqueCompanies = getUniqueData(allProducts, "company");
  const allUniqueColors = getUniqueData(allProducts, "colors");
  console.log(allUniqueColors);
  // console.log(allUniqueCompanies);
  // console.log(category);

  return (
    <Wrapper>
      {/* SEARCH FUNCTIONALITY */}
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Search..."
            onChange={updateFilterValue}
          />
        </form>
      </div>

      {/* CATEGORY WISE FILTER */}
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {allUniqueCategories.map((currElem, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={currElem}
                onClick={updateFilterValue}
              >
                {currElem}
              </button>
            );
          })}
        </div>
      </div>

      {/* COMPANY WISE FILTER */}
      <div className="filter-company">
        <h3>Companies</h3>
        <form action="#">
          <select
            className="filter-company--select"
            name="company"
            id="company"
            onClick={updateFilterValue}
          >
            {allUniqueCompanies.map((currElem, index) => {
              return (
                <option key={index} value={currElem} name="company">
                  {currElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      {/* COLOR WISE FILTER */}
      <div className="filter-color colors">
        <h3>colors</h3>

        <div className="filter-color-style">
          {allUniqueColors.map((currColor, index) => {

            if( currColor === "All"){
              return (
              <button
                type="button"
                name="color"
                key={index}
                className="color-all--style"
                value={ currColor }
                onClick={ updateFilterValue }

              >
                All
              </button>
              )
            }
            return (
              <button
                type="button"
                name="color"
                style={{ backgroundColor: currColor }}
                key={index}
                className={color === currColor ? "btnStyle active" : "btnStyle"}
                value={ currColor }
                onClick={ updateFilterValue }

              >
                { color === currColor ? <FaCheck className="checkStyle" /> : null }
              </button>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;

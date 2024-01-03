import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../contexts/ProductContext";
import styled from "styled-components";
import NavigationBar from "../Components/NavigationBar";
import FormatPrice from "../Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import SinglePageImage from "../Components/SinglePageImage";
import StarRating from "../Components/StarRating";
import AddToCart from "../Components/AddToCart";

const API_URL = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();

  const {
    getSingleProductData,
    isSingleLoading,
    isSingleError,
    singleProduct,
  } = useProduct();

  useEffect(() => {
    getSingleProductData(`${API_URL}?id=${id}`);
  }, []);

  const {
    id: productId,
    name,
    company,
    price,
    colors,
    description,
    category,
    featured,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;

  // console.log(image);

  if (isSingleLoading) {
    return <div className="page_loading">LOADING..........</div>;
  }

  return (
    <Wrapper>
      <NavigationBar title={name} />

      <Container className="container">
        <div className="grid grid-two-column">
          {/* product images */}

          <div className="product_images">
            <SinglePageImage image={image} />
          </div>

          {/* product information */}
          <div className="product-data">
            <h2>{name}</h2>
            <StarRating stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP :{" "}
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>

            <p className="product-data-price product-data-real-price">
              Deal Of The Day: <FormatPrice price={price} />
            </p>

            <p>{description}</p>

            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Gada Delivered</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available :{" "}
                <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>

              <p>
                ID: <span> {id} </span>
              </p>

              <p>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }

  .product_images {
    display: flex;
    align-items: center;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0rem 12rem;
`;

export default SingleProduct;

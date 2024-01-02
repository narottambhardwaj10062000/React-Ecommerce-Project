import React, { useState } from "react";
import styled from "styled-components";

const SinglePageImage = ({ image = [{url: ""}]}) => {

    // console.log(image)
    const [mainImage, setMainImage] = useState(image[0]);
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {image.map((currImage, index) => {
          return (
            <figure key={index}>
              <img
                src={currImage.url}
                alt={currImage.filename}
                key={currImage.id}
                className="box-image--style"
                onClick={() => setMainImage(currImage)}
              />
            </figure>
          );
        })}
      </div>

      {/* big image  */}
        <div className="main-screen">
            <img src={mainImage.url} alt={mainImage.filename} />
        </div>

    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    ${'' /* order: 2;  */}

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }
`;

export default SinglePageImage;

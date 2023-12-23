import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const HeroComponent = (props) => {
  
  return (
    <Wrapper>
        <div className = "container">
            <div className = "grid grid-two-column">
                <div className = "hero-section-data">
                    <p className = "intro-data">Welcome to</p>
                    <h1>{props.myData.name}</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                    atque temporibus veniam doloribus libero ad error omnis voluptates
                    animi! Suscipit sapiente.
                    </p>
                    <NavLink>
                        <Button>Shop Now</Button>
                    </NavLink>
                </div>

                <figure>
                    <img src = "https://imgs.search.brave.com/BAhhJOozYf5E8tnDwWKYZnkYaFKjx2-qM4SkZaNsf4Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDAyNjI2MDYxNDgt/ZGJlNmEzZjVkYzkx/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRCOGZH/RndjR3hsSlRJd2FY/Qm9iMjVsZkdWdWZE/QjhmREI4Zkh3dw" alt = "hero-section-photo" className = "img-style"/>
                </figure>
            </div>
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: 30rem;
  }
`;


export default HeroComponent
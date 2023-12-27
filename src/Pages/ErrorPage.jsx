import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { Button } from "../styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
        <div className="container">
            <div>
                <h2>404</h2>
                <h2>UH OH! You're Lost.</h2>
                <p>
                    This Page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.
                </p>

                <NavLink to="/">
                    <Button>Go Back To HomePage</Button>
                </NavLink>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`

export default ErrorPage
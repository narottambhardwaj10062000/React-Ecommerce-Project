import React from 'react'
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
        <h1 className = "test">This Will Be The Home Page Of My Much Awaited React E-Commerce Project</h1>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  background-color : ${({ theme }) => (theme.colors.bg)};
  height : 100vh;
  width : 100%;

  .test{
    color : blue;
    background-color : yellow;
  }
`;



export default Home
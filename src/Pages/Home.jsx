import React from 'react'
import styled from "styled-components";
import HeroComponent from "../Components/HeroComponent";

const Home = () => {

  const data = {
    name :"Gada Electronics",
  }

  return (
    <Wrapper>
        <HeroComponent myData = {data}/>
    </Wrapper>
  )
};

const Wrapper = styled.section`

`;



export default Home
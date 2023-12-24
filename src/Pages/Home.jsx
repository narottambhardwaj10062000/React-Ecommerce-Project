import React from 'react'
import styled from "styled-components";
import HeroComponent from "../Components/HeroComponent";
import Services from "../Components/Services";
import Trusted from "../Components/Trusted";

const Home = () => {

  const data = {
    name :"Gada Electronics",
  }

  return (
    <Wrapper>
        <HeroComponent myData = {data}/>
        <Services />
        <Trusted />
    </Wrapper>
  )
};

const Wrapper = styled.section`

`;



export default Home
import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <MainHeader>
        <NavLink to = "/">
            <img src="https://imgs.search.brave.com/fO7A5mO207u79w3LekULbcJKsfNKlPYIXh_Te4AUdNk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vemVuYnVzaW5l/c3MvcV9hdXRvL3Yx/L2xvZ2FzdGVyL2xv/Z2FzdGVyLTIwMTkt/MDItMDEyNi10LWUt/Y2l0eS1sb2dvLTUu/cG5n" alt="My Dukaan Logo" className="logo"/>
        </NavLink>

        <NavBar />

    </MainHeader>
  );
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 8rem;
  }
`

export default Header
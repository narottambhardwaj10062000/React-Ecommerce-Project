import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import { GlobalStyle } from "./GlobalStyle"; 
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";

function App() {

  const theme = {
    colors : {
      helper: "#8490ff",
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      bg : "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
  };


  return (
    <ThemeProvider theme = { theme }>
      <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About /> } />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

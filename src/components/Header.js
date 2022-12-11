import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../img/logo.png';
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={logo} alt="my logo img" className="logo"/>
      </NavLink>
      <Navbar></Navbar>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 10rem;
  }
`;
export default Header;
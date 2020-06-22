import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.svg";
import { ButtonContainer } from "./Button";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Report from '../Report';

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-2">
            <Link to="/" className="nav-link">
              Buy Medical Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus " />
            </span>
            my cart
          </ButtonContainer>
        </Link>
        <Link to = "/channel" className = "ml-auto">
          <ButtonContainer>
            <span className="mr-1">
              <i className="" />
            </span>
            e-Channelling
          </ButtonContainer>
        </Link>
        <Link to = "/bmi">
          <ButtonContainer>
            <span className="mr-1">
              <i className="" />
            </span>
            BMI
          </ButtonContainer>
        </Link>
        <Link to = "/tdee">
          <ButtonContainer>
            <span className="mr-1">
              <i className="" />
            </span>
            TDEE
          </ButtonContainer>
        </Link>
        <Link to = "/keto">
          <ButtonContainer>
            <span className="mr-1">
              <i className="" />
            </span>
          Keto
          </ButtonContainer>
        </Link>
        <Link to="/lipid">
          <ButtonContainer>
            <span className="mr-1">
              <i className="" />
            </span>
            Lipid Profile
          </ButtonContainer>
        </Link>
        <Link to="/diabetes">
          <ButtonContainer>
            <span className="mr-1">
              <i className="" />
            </span>
            Diabetes
          </ButtonContainer>
        </Link>
        <Link to = "/login">
          <ButtonContainer>
            <span className="mr-1">
              <i className="" />
            </span>
            Sign Up
          </ButtonContainer>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;
  }
  @media (max-width: 576px) {
    .navbar-nav {
      flex-direction: row !important;
`;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;

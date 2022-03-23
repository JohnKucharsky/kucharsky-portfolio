import React from "react";
import { NavLink, Link } from "react-router-dom";

import styled from "styled-components";

const Nav = ({ language, setLanguage }) => {
  return (
    <Wrapper>
      <div>
        <Link className="nav-left" to="/">
          {language ? "Kucharsky" : "Кучарский"}
        </Link>
      </div>
      <div className="nav-right">
        <NavLink className="link" to="/">
          {language ? "Projects" : "Сайты"}
        </NavLink>
        <NavLink className="link" to="/about">
          {language ? "About" : "Обо мне"}
        </NavLink>
        <div className="buttons">
          <button
            className={language ? "btn-active" : ""}
            onClick={() => setLanguage(true)}
          >
            En
          </button>
          <button
            className={!language ? "btn-active" : ""}
            onClick={() => setLanguage(false)}
          >
            Ru
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Nav;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.2rem;
  .btn-active {
    color: #868686;
  }
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1500px) {
    font-size: 1.7rem;
  }
  .nav-left {
    text-decoration: none;
    color: black;

    @media (max-width: 450px) {
      display: none;
    }
  }
  .link {
    text-decoration: none;
    color: black;
  }
  .active {
    color: #868686;
  }
  .nav-right {
    display: flex;
    gap: 2rem;
    @media (min-width: 1000px) {
      gap: 4rem;
    }
    @media (min-width: 1500px) {
      gap: 6rem;
    }
    @media (max-width: 450px) {
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      gap: 0.5rem;
    }
  }
  .buttons {
    margin-left: 2rem;
    @media (min-width: 1500px) {
      margin-left: 10rem;
    }
    @media (min-width: 1000px) {
      margin-left: 5rem;
    }
    @media (max-width: 450px) {
      margin-left: 0;
    }

    button {
      border: none;
      padding: none;
      background-color: white;
      text-decoration: underline;
      margin-left: 1rem;
      @media (max-width: 500px) {
        margin-left: 0;
      }
    }
  }
`;

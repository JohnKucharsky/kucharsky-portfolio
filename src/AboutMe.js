import React from "react";
import styled from "styled-components";
import { AiOutlineWhatsApp } from "react-icons/ai";

const AboutMe = ({ language }) => {
  return (
    <Wrapper>
      <div className="left">
        <img src="images/IMG_20220120_154743 1.jpg" alt="" />
      </div>
      <div className="right">
        <ul>
          <li>{language ? "John Kucharsky" : "Кучарский Иван"}</li>
          <li>{language ? "Web Developer" : "Разработчик Сайтов"}</li>
          <li>React Redux Javascript HTML CSS</li>
          <li>
            <AiOutlineWhatsApp />{" "}
            <a href="https://api.whatsapp.com/send?phone=+79251805132">
              +79251805132
            </a>
          </li>
          <li>
            <a href="mailto:johnkucharsky@yandex.ru">johnkucharsky@yandex.ru</a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default AboutMe;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;
  margin-top: 2rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }

  ul {
    padding: 0;

    line-height: 3rem;
    li:nth-child(1) {
      font-size: 2rem;
      @media (max-width: 600px) {
        font-size: 1.5rem;
        text-align: center;
      }
    }
    li:nth-child(2) {
      font-size: 1.5rem;
      @media (max-width: 600px) {
        font-size: 1.2rem;
        text-align: center;
      }
    }
    li:nth-child(3) {
      font-size: 1.2rem;
      @media (max-width: 600px) {
        font-size: 1rem;
        text-align: center;
      }
    }
    li:nth-child(4) {
      font-size: 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #166534;
      transition: all 0.4s linear;
      @media (max-width: 600px) {
        font-size: 1.2rem;
        justify-content: center;
      }
      &:hover {
        color: #22c55e;
      }
      a {
        transition: all 0.4s linear;
        color: #166534;
        text-decoration: none;
        &:hover {
          color: #22c55e;
        }
      }
    }
    li:nth-child(5) {
      transition: all 0.4s linear;
      font-size: 1.5rem;
      @media (max-width: 600px) {
        font-size: 1.2rem;
        text-align: center;
      }
      a {
        color: #166534;
        text-decoration: none;
        &:hover {
          color: #22c55e;
        }
      }
    }
    li {
      list-style: none;
    }
  }
  a:hover {
    color: #22c55e;
  }
  .left {
    img {
      width: 100%;
      border-radius: 0.2rem;
    }
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { data } from "./data";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const descData = data.sort(function (a, b) {
  return b.id - a.id;
});

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);
  const [clicked, setClicked] = useState("");
  const [clickedClose, setClickedClose] = useState("");
  console.log(clickedClose);

  let swiperArray = descData.find(({ id }) => id === clicked);

  return (
    <Wrapper>
      {openModal && <div className="overlay-slider"></div>}
      {openModal && (
        <div className="slide-container">
          <AiOutlineCloseCircle
            className={
              clickedClose.color
                ? "close-btn-swiper close-white"
                : "close-btn-swiper"
            }
            onClick={() => setOpenModal(false)}
          />
          <Swiper
            slidesPerView={1}
            navigation={!swiperArray.img.length <= 1 && true}
            modules={[Navigation]}
            className="mySwiper"
            effect="slide"
          >
            {swiperArray.img &&
              swiperArray.img.map((slide) => (
                <SwiperSlide key={slide}>
                  <img className="slide-img" src={slide} alt="" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
      {descData.map((i) => (
        <div key={i.id} className="card">
          <div className="img-container">
            <div
              className="overlay"
              onClick={() => {
                setClicked(i.id);
                setClickedClose(i);
                setOpenModal(true);
              }}
            >
              <MdOutlinePhotoLibrary className="overlay-icon" />
            </div>
            <img src={i.img[0]} alt="" />

            <div className="tags">
              {i.features.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </div>
          </div>
          <div className="card-content">
            <div className="title">{i.title}</div>
            <div className="links">
              <a href={i.url}>Web</a>
              <a href={i.github}>Github</a>
            </div>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Projects;
const Wrapper = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(1, minmax(0, 1fr));
  .overlay-icon {
    z-index: 2;
    position: absolute;
    left: 50%;
    color: white;
    font-size: 5rem;
    transform: translate(-50%);
    top: 30%;

    height: auto;
  }
  .slide-img {
    width: 100%;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    a {
      padding: 0.2rem 2rem;
      color: white;
      background-color: #4b5563;
      text-decoration: none;
      border-radius: 0.3rem;
      transition: all 0.4s linear;
      &:hover {
        transform: scale(0.98);
        background-color: #6b7280;
      }
    }
  }
  .close-btn-swiper {
    z-index: 6;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
  }
  .close-white {
    color: white;
  }
  .overlay-slider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    background-color: black;
  }
  .slide-container {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 5;
    width: 90%;

    height: auto;
  }
  .card-content {
    padding: 0.2rem 0.5rem;
  }
  .title {
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
    color: #1f2937;
  }
  .img-container {
    position: relative;
    img {
      border-radius: 0.3rem;
    }
  }
  .overlay {
    border-radius: 0.3rem;
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    visibility: none;
    transition: all 0.4s linear;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .card {
    background-color: #f3f4f6;
    position: relative;
    border: 1px solid #e5e7eb;
    padding: 0.2rem;
    border-radius: 0.3rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    img {
      width: 100%;
    }
  }

  .img-container:hover .overlay {
    opacity: 1;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
    left: 0;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 0.3rem;

    p {
      color: white;
      padding: 0 0.2rem;
      border-radius: 0.2rem;
    }
  }
  @media (max-width: 600px) {
    max-width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1500px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;

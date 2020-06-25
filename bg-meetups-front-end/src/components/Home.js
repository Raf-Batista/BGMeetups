import React from "react";
import Signup from "./Signup";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
import bg4 from "../assets/images/bg4.jpg";
import bg5 from "../assets/images/bg5.jpg";

const Home = () => {
  console.log(bg1);
  return (
    <div className="container text-center mt-5 home-img">
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-5"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={bg1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={bg2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={bg3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={bg4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={bg5} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Home;

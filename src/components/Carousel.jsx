import React from "react";
import coupleImg from "../assets/couple.jpg";
import dogImg from "../assets/dog.jpg";
import familyImg from "../assets/family.jpg";

function Carousel() {
  const slides = [
    {
      icon: "👩‍❤️‍👨",
      title: "Couples Move",
      text: "We make moving with your loved ones stress-free and fun!",
    },
    {
      icon: "🐶",
      title: "Pet Friendly",
      text: "We handle your furry friends with care during every move.",
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Relocation",
      text: "Safe and smooth relocation services for families of all sizes.",
    },
  ];

  return (
    <>
      {/* Bootstrap Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide mb-5">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={coupleImg} className="d-block w-100" alt="Couple" />
          </div>
          <div className="carousel-item">
            <img src={dogImg} className="d-block w-100" alt="Dog" />
          </div>
          <div className="carousel-item">
            <img src={familyImg} className="d-block w-100" alt="Family" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Emoji Cards */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="mb-5 fw-bold">Moving Scenarios We Handle</h2>
          <div className="row g-4">
            {slides.map((slide, index) => (
              <div key={index} className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="display-3">{slide.icon}</div>
                    <h5 className="card-title mt-3">{slide.title}</h5>
                    <p className="card-text text-muted">{slide.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;

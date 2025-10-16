import React, { useState } from "react";
import movingVan from "../assets/moving-van.jpg";
import Contact from "./Contact";
import QuoteForm from "./QuoteForm"; // Make sure this exists

function Hero() {
  const [showContact, setShowContact] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  return (
    <section className="container col-xxl-8 px-4 py-5 position-relative">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={movingVan}
            className="d-block mx-lg-auto img-fluid"
            alt="Moving van"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Move With Joy</h1>
          <p className="lead">
            Welcome to our website, where we provide exceptional moving services across the US.
            Moving doesn’t have to be stressful, and we make it seamless and enjoyable.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={() => setShowQuoteForm(true)}
            >
              Get a Quote
            </button>
            <button
              className="btn btn-outline-secondary btn-lg px-4"
              onClick={() => setShowContact(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Conditionally render modals */}
      {showContact && <Contact onClose={() => setShowContact(false)} />}
      {showQuoteForm && <QuoteForm onClose={() => setShowQuoteForm(false)} />}
    </section>
  );
}

export default Hero;

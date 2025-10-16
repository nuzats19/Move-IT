import React, { useState } from "react";
import boxIcon from "../assets/box-seam.svg"; // ✅ correct import for image in src/assets

function Navbar() {
  const [postcode, setPostcode] = useState("");
  const [status, setStatus] = useState("");

  // ✅ Handle postcode check
  const handleCheck = async (e) => {
    e.preventDefault();
    setStatus("Checking...");

    try {
      const res = await fetch("http://localhost:5000/api/postcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: postcode }),
      });

      const data = await res.json();

      if (data.available) {
        setStatus("✅ Service is available in your area!");
      } else {
        setStatus("❌ Sorry, service not available in your area.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error connecting to server.");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div className="container-fluid">
       
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={boxIcon}
            height="30"
            alt="brand_icon"
            className="me-2"
            style={{ cursor: "pointer" }}
          />
          <span className="fw-bold">Move It</span>
        </a>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Residential Moving
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Office Relocation
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Storage Solutions
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={handleCheck}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter postcode"
              aria-label="Search"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              required
            />
            <button className="btn btn-outline-success" type="submit">
              Check
            </button>
          </form>

          {status && (
            <p className="ms-3 mt-2 small text-success fw-semibold">{status}</p>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

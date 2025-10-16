import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      setStatus(data.message || "Subscribed!");
      setEmail(""); // clear input
    } catch (err) {
      console.error(err);
      setStatus("Error subscribing. Try again.");
    }
  };

  return (
    <footer className="py-5">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Services</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
            {status && <p className="mt-2 text-success">{status}</p>}
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2025 Company, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

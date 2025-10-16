import React, { useState } from "react";

function QuoteForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "", // details about the move
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setStatus(data.message);
      setFormData({ name: "", email: "", details: "" });
    } catch (err) {
      console.error(err);
      setStatus("Error sending quote request.");
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content p-4 rounded-4 shadow">
          <h4>Get a Quote</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-control mb-2"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mb-2"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="details"
              className="form-control mb-3"
              placeholder="Details about your move"
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Close
              </button>
            </div>
          </form>
          {status && <p className="mt-3 text-success">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;

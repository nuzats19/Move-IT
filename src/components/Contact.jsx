import React, { useState } from "react";

function Contact({ onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setStatus(data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content p-4 rounded-4 shadow">
          <h4>Contact Us</h4>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              className="form-control mb-2"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              className="form-control mb-2"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="form-control mb-3"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-primary">
                Send
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
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

export default Contact;

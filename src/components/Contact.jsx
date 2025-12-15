import { useState } from "react";
import axios from "axios";
import "./ContactUs.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/contact",
        form
      );
      alert(res.data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h2>
          Contact Us <span>✏️</span>
        </h2>
        <p className="subtitle">We’d love to hear from you 💬</p>

        <form onSubmit={submit}>
          {/* NAME */}
          <div className="input-group">
            <span>👤</span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="input-group">
            <span>📧</span>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="input-group textarea">
            <span>💬</span>
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button disabled={loading}>
            {loading ? "Sending..." : "🚀 Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Building, User, MessageSquare, Sparkles, X } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "Strategic Brand Advisory",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const services = [
    "Strategic Brand Advisory",
    "Sustainability & ESG Strategy",
    "Market Expansion & Growth",
    "Partnership & Stakeholder Collaboration",
    "Executive Consultation",
    "Other General Inquiry",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: null, message: "" }));
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: "validation",
        message: "Please fill in all required fields (Name, Email, and Message).",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        submitting: false,
        success: false,
        error: "validation",
        message: "Please provide a valid email address.",
      });
      return;
    }

    setStatus({
      submitting: true,
      success: false,
      error: null,
      message: "",
    });

    try {
      const baseUrl = import.meta.env.VITE_API_URL
        ? import.meta.env.VITE_API_URL.replace(/\/$/, "")
        : (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
          ? "http://localhost:5001"
          : "";
      const apiUrl = `${baseUrl}/api/contact`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          success: true,
          error: null,
          message: data.message || "Thank you! Your enquiry has been received and forwarded to leadership.",
        });

        // Trigger success popup modal
        setShowModal(true);

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "Strategic Brand Advisory",
          message: "",
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: "server",
          message: data.message || "Failed to send message. Please try again or reach out directly at Ceo@samgralogic.com.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        submitting: false,
        success: false,
        error: "network",
        message: "Unable to connect to the email server. Please ensure the backend server is running, or contact Ceo@samgralogic.com directly.",
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header" data-aos="fade-up">
          <div className="contact-badge">
            <Sparkles size={16} className="contact-badge-icon" />
            <span>Connect With Us</span>
          </div>
          <h2 className="contact-title">
            Partner With <span className="text-highlight">SAMGRA LOGIC</span>
          </h2>
          <p className="contact-subtitle">
            Initiate a conversation with our leadership. Whether exploring strategic sustainability, brand transformation, or market expansion, we're ready to collaborate.
          </p>
        </div>

        {/* Centered Enquiry Form Card */}
        <div className="contact-form-wrapper contact-form-centered" data-aos="fade-up">
          <div className="form-card">
            <div className="form-card-header">
              <h3>Submit an Enquiry</h3>
            </div>

            {/* Error Notification */}
            {status.error && (
              <div className="form-alert form-alert-error">
                <AlertCircle size={22} className="alert-icon" />
                <div className="alert-content">
                  <strong>Notice:</strong>
                  <p>{status.message}</p>
                  {status.error === "network" && (
                    <a href="mailto:Ceo@samgralogic.com" className="alert-direct-link">
                      Click here to email Ceo@samgralogic.com directly &rarr;
                    </a>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="enquiry-form">
              <div className="form-row">
                {/* Full Name Field */}
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="req-star">*</span>
                  </label>
                  <div className="input-with-icon">
                    <User size={18} className="field-icon" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                {/* Business Email Field */}
                <div className="form-group">
                  <label htmlFor="email">
                    Business Email <span className="req-star">*</span>
                  </label>
                  <div className="input-with-icon">
                    <Mail size={18} className="field-icon" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Business Email"
                      required
                      disabled={status.submitting}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row">
                {/* Phone Number Field */}
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <div className="input-with-icon">
                    <Phone size={18} className="field-icon" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      disabled={status.submitting}
                    />
                  </div>
                </div>

                {/* Company / Organization Field */}
                <div className="form-group">
                  <label htmlFor="company">Company / Organization</label>
                  <div className="input-with-icon">
                    <Building size={18} className="field-icon" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company / Organization"
                      disabled={status.submitting}
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="form-group">
                <label htmlFor="subject">Area of Interest / Service</label>
                <div className="select-wrapper">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={status.submitting}
                  >
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="message">
                  Your Message / Requirements <span className="req-star">*</span>
                </label>
                <div className="textarea-with-icon">
                  <MessageSquare size={18} className="field-icon textarea-icon" />
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message / Requirements"
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="submit-btn-container">
                <button
                  type="submit"
                  className={`submit-enquiry-btn ${status.submitting ? "is-loading" : ""}`}
                  disabled={status.submitting}
                >
                  {status.submitting ? (
                    <>
                      <span className="btn-spinner"></span>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup Modal */}
      {showModal && (
        <div className="popup-modal-overlay" onClick={closeModal}>
          <div
            className="popup-modal-card"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
          >
            <button
              className="popup-modal-close"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="popup-icon-wrapper">
              <CheckCircle2 size={48} className="popup-check-icon" />
            </div>

            <h3 className="popup-modal-title">Mail Sent Successfully!</h3>
            <p className="popup-modal-desc">
              Thank you for contacting <strong>SAMGRA LOGIC</strong>. Your enquiry has been transmitted directly to our leadership team. We will review your message and connect with you shortly.
            </p>

            <button className="popup-modal-btn" onClick={closeModal}>
              Done
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;

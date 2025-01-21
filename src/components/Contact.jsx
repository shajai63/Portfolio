import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "../styles/Contact.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [popup, setPopup] = useState({ show: false, message: "", type: "" });

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form data
        if (
            formData.firstName &&
            formData.lastName &&
            formData.email &&
            formData.phone &&
            formData.message
        ) {
            setPopup({
                show: true,
                message: "Form submitted successfully!",
                type: "success",
            });

            // Clear form inputs
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } else {
            setPopup({
                show: true,
                message: "Please fill in all fields correctly.",
                type: "error",
            });
        }

        // Hide popup after 3 seconds
        setTimeout(() => {
            setPopup({ ...popup, show: false });
        }, 3000);
    };

    return (
        <section id="contact" className="py-5">
            <div className="container" data-aos="fade-up">
                <h1 className="text-center mb-4 text-white">Contact Us</h1>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <form onSubmit={handleSubmit} className="p-4 shadow rounded">
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="form-control bg-transparent text-light"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-control bg-transparent text-light"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control bg-transparent text-light"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-control bg-transparent text-light"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className="form-control bg-transparent text-light"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Submit
                            </button>
                        </form>
                        {popup.show && (
                            <div
                                className={`mt-3 alert ${
                                    popup.type === "success"
                                        ? "alert-success"
                                        : "alert-danger"
                                }`}
                                role="alert"
                            >
                                {popup.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

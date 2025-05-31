import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "d1215adc-fec8-4ba8-b795-957a166e794d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className="container mt-5 mb-5" id="contact">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4 rounded-4 border border-secondary" style={{ backgroundColor: "rgb(24, 24, 60)" }}>
            <h1 className="text-center mb-5 display-5 text-white fw-bold">Contact Us</h1>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control text-white"
                  required
                  style={{ backgroundColor: "rgb(24, 24, 60)" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control text-white"
                  required
                  style={{ backgroundColor: "rgb(24, 24, 60)" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  name="message"
                  className="form-control text-white"
                  rows="4"
                  required
                  style={{ backgroundColor: "rgb(24, 24, 60)" }}
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>

            {result && (
              <div className="mt-3 alert alert-info text-center">{result}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import "../Stylings/contact.css";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'; 

const Contact = () => {
  const formRef = useRef(); 

  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_3oe6zzt',
    'template_dvr7qyy',
    formRef.current,
    'P37Ngej1DFiiLrk-V'
  ).then((result) => {
    console.log("Email sent successfully:", result.text);
    alert("Message sent successfully!");

    setFormData({
      fullname: '',
      phone: '',
      email: '',
      message: ''
    });

  }).catch((error) => {
    console.error("Email sending failed:", error.text);
    alert("Failed to send message. Please try again.");
  });
};

  return (
    <div className="contactContainer">
        <div className="contactHeader">
            <p className="big" id="con_big">Contact</p>
            <p className="small" id="con_small">Get in Touch</p>
        </div>

      <div className="details">
        <p><span className="deSub"><i className="fas fa-envelope"></i> Email: <br /></span><span className="deSubans">nithish8180@gmail.com</span></p>
        <p><span className="deSub"><i className="fas fa-map-marker-alt"></i> Location: </span><br /><span className="deSubans">Hyderabad, Telangana</span></p>
        <p><span className="deSub"><i className="fab fa-linkedin"></i> LinkedIn: </span><br /><span className="deSubans"><a href="http://linkedin.com/in/nithishkumar1121
 " className="no-underline" id="linked"> Professional Realm</a></span></p>
        <p><span className="deSub"><i className="fab fa-github"></i> GitHUB: </span><br /><span className="deSubans"><a href="https://github.com/Nithish1121" className="no-underline" id="git">Technical Realm</a></span></p>
      </div>

      <div className="form">
        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}> {/* ✅ Added ref */}
          <div className="form-group">
            <label htmlFor="fullname"></label>
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone"></label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              placeholder="Message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>  
  );
};

export default Contact;



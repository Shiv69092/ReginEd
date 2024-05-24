// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./ContactUs.scss";
// import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../../Redux/languageSlice";
// import emailjs from "emailjs-com";
// import { app, firestore } from "../../Components/Firebase/Firebase";
// import { getFirestore } from "firebase/firestore";
import Title from "../../title/Title";
import Description from "../../description/Description";
import Data from "../../../data/regined.json";

const ContactUs = () => {
  const language = useSelector(selectLanguage);
  // const sendEmail = async () => {
  //   try {
  //     await setFormData((prevFormData) => ({
  //       ...prevFormData,
  //     }));

  //     const emailResponse = await emailjs.send(
  //       "service_ruj48zw",
  //       "template_j1buwwp",
  //       {
  //         to_email: "shivanshumishra9834@gmail.com",
  //         to_name: "Shivanshu Mishra",
  //         from_name: `${formData.firstName}`,
  //         message: `${formData.message}`,
  //       },
  //       "10QcX9lJetpqfvWyp"
  //     );

  //     console.log("Email sent:", emailResponse);
  //   } catch (error) {
  //     console.error("Email failed", error);
  //   }
  // };

  // const language = useSelector(selectLanguage);
  // const contactText = {
  //   en: `Have Questions Or Need Assistance? Reach Out To Us Anytime. Our Dedicated Support Team Is Here To Provide Guidance, Address Queries, And Ensure A Seamless Experience On Your Career And Financial Empowerment Journey.`,
  //   hi: `प्रश्न हैं या सहायता की आवश्यकता है? किसी भी समय हमसे संपर्क करें। हमारी समर्पित सहायता टीम मार्गदर्शन प्रदान करने, प्रश्नों का समाधान करने और आपके करियर और वित्तीय सशक्तिकरण यात्रा पर एक निर्बाध अनुभव सुनिश्चित करने के लिए यहां है।`,
  // };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // const validateForm = () => {
  //   let valid = true;
  //   const newErrors = {};

  //   const regexPatterns = {
  //     firstName: /^[a-zA-Z]{2,}$/,
  //     lastName: /^[a-zA-Z]{2,}$/,
  //     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  //     phone: /^\d{10}$/,
  //     company: /^[a-zA-Z0-9\s]+$/,
  //     jobTitle: /^[a-zA-Z\s]+$/,
  //     message: /^.{10,}$/,
  //   };

  //   Object.keys(formData).forEach((key) => {
  //     if (formData[key].trim() === "") {
  //       newErrors[key] = `${
  //         key.charAt(0).toUpperCase() + key.slice(1)
  //       } is required`;
  //       valid = false;
  //     } else if (
  //       regexPatterns[key] &&
  //       !regexPatterns[key].test(formData[key])
  //     ) {
  //       newErrors[key] = `Invalid ${
  //         key.charAt(0).toUpperCase() + key.slice(1)
  //       }`;
  //       valid = false;
  //     }
  //   });

  //   setErrors(newErrors);
  //   return valid;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (validateForm()) {
    //   const contactsCollection = collection(firestore, "contactus");

    //   try {
    //     const docRef = await addDoc(contactsCollection, formData);

    //     setFormData({
    //       firstName: "",
    //       lastName: "",
    //       email: "",
    //       phone: "",
    //       company: "",
    //       jobTitle: "",
    //       message: "",
    //     });

    //     // Send email using emailjs
    //     sendEmail();

    //     alert("Thank you for contacting us!");
    //   } catch (error) {
    //     console.error("Error adding document: ", error);
    //   }
    // }
  };

  return (
    <div className="contact-form-container" id="contact">
      <Title
        title={Data.getInTouchSection.title[language]}
        className="contactTitle"
      />
      <div className="form-container">
        <div className="right-section">
          <div className="right-section-description">
            {/* {contactText[language]} */}
            <Description
              description={Data.getInTouchSection.description[language]}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="firstName">
                {Data.getInTouchSection.form.firstName[language]}
              </label>
              <input
                className="form-input"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
              <div className="error-message">{errors.firstName}</div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="lastName">
                {Data.getInTouchSection.form.lastName[language]}
              </label>
              <input
                className="form-input"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              <div className="error-message">{errors.lastName}</div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                {Data.getInTouchSection.form.email[language]}
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <div className="error-message">{errors.email}</div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="phone">
                {Data.getInTouchSection.form.phone[language]}
              </label>
              <input
                className="form-input"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              <div className="error-message">{errors.phone}</div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="company">
                {Data.getInTouchSection.form.company[language]}
              </label>
              <input
                className="form-input"
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
              />
              <div className="error-message">{errors.company}</div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="jobTitle">
                {Data.getInTouchSection.form.jobTitle[language]}
              </label>
              <input
                className="form-input"
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
              />
              <div className="error-message">{errors.jobTitle}</div>
            </div>
            <div className="form-group textareaBox">
              <label className="form-label" htmlFor="message">
                {Data.getInTouchSection.form.howCanWeHelp[language]}
              </label>
              <textarea
                className="form-input"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="error-message">{errors.message}</div>
            </div>
            <div className="formbutton">
              <button type="submit">
                {Data.getInTouchSection.submitButton[language]}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// eslint-disable-next-line no-unused-vars
import React from "react";
import Banner from "./view/header/Banner";
import About from "./view/about/About";
import Download from "./view/donwloadNow/Download";
import Career from "./view/career/Career";
import Footer from "./view/footer/Footer";
import ContactUs from "./view/contact/ContactUs";
import Modal from "../Modal/Modal";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Download />
      <Career />
      <ContactUs />
      <Footer />
      <div className="modal-overlay">
        <Modal />
      </div>
    </>
  );
};

export default Home;

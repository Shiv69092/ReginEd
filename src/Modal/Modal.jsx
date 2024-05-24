import React, { useState, useEffect } from "react";
import "./Modal.scss";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 500);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
    document.body.style.overflow = showModal ? "auto" : "hidden";
  };

  return (
    <div>
      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <div className="modal-content">
              <p>Our Mission!</p>
              <span className="modal-text">
                Helping families during financial crisis or protect families
                from financial crisis
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

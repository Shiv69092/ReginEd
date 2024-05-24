// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Title from "../../title/Title";
import Description from "../../description/Description";
import { useSelector } from "react-redux";
import AboutImage from "../../../assets/aboutImage.png";
import "./about.scss";
import Button from "../../button/Button";
import { selectLanguage } from "../../../Redux/languageSlice";
import Data from "../../../data/regined.json";
// import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../Firestore/Firestore";

const About = () => {
  const language = useSelector(selectLanguage);

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(
          firestore,
          "/websites/website/regined"
        );
        const snapshot = await getDocs(collectionRef);
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="about" id="about">
      <Title
        className="aboutTitle"
        title={data.map((item) => item.aboutSection.title[language])}
      />
      <div className="aboutContent">
        <div className="aboutImage col-lg-6">
          <img src={AboutImage} alt="" />
        </div>
        <div className="aboutDescription col-lg-6">
          <Description
            description=// description="Empowering individuals to thrive in the digital age, our mission is to bridge innovation with accessibility. We strive to create solutions that make technology inclusive and beneficial for everyone."
            {data.map((item) => item.aboutSection.description[language])}
          />
          {/* <Button buttonName="Read More" /> */}
        </div>
      </div>
      <div className="aboutCards">
        {Data.aboutSection.serviceCard.cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <div className="innerCard">
                <Title title={card.title[language]} />
                <Description description={card.description[language]} />
                <Button
                  buttonName={
                    Data.aboutSection.serviceCard.cards[1].button[language]
                  }
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;

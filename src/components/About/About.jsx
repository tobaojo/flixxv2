import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar active={"active"} />
      <div className="container">
        <h3>About this app</h3>
        <h4>Flixx &copy; 2023</h4>
        <p>Inspired by Netflix and IMDB</p>
      </div>
      <Footer />
    </>
  );
};

export default About;

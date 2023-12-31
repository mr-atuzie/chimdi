import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Banner
        vid={
          "https://res.cloudinary.com/domthgc9v/video/upload/v1691027301/chimdi/_import_60cd8393d3f362.82943044_FPpreview_regufc.mp4"
        }
        heading={"Contact us"}
        text={"all services - what we do"}
      />
    </div>
  );
};

export default Contact;

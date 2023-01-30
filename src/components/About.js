import React from "react";
import "./About.css";
import Img1 from "./Assets/aboutImg.png";
import Img2 from "./Assets/aboutImg2.png";
import star from "./Assets/star.png";
import avtar from "./Assets/avtar.png";

const About = () => {
  return (
    <>
      <div className="AboutMainDiv ">
        <div className="row m-0">
          <div className="col-6 aboutLeftBox">
            <h1 className="fs-1 fw-bold primary">About Us</h1>
            <p className="aboutText mt-5">
              We are a young and passionate firm offering an array of
              bookkeeping, accounting and taxation services to help small and
              mid scale businesses build a solid financial foundation upon which
              to grow your business.
            </p>
            
            <p className="aboutText mt-5">
              We understand the importance of accurate and timely financial
              information that is why it is our mission to provide you with the
              highest quality of services at affordable price
            </p>
            <p className="aboutText my-5">
              We strongly believe in working with our client collaboratively and
              ensuring that they require minimal intervention/supervision
            </p>
          </div>
          <div className="col-6">
            <div className="row m-0">
              <div className="col-6 ">
                <div className="aboutImgPsRelative">
                  <img src={Img1} alt="img1" className="img-fluid aboutStartBatchImg" />
                  <span className="aboutStartBatch p-3">
                    5.0 Ratings &nbsp;
                    <img src={star}/>&nbsp;
                    <img src={star}/>&nbsp;
                    <img src={star}/>&nbsp;
                    <img src={star}/>&nbsp;
                    <img src={star}/>&nbsp;
                  </span>
                </div>
              </div>

              <div className="col-6 mt-4">
              <div className="aboutImgPsRelative">
                <img src={Img2} alt="img1" className="img-fluid aboutStartBatchImg2" />
                <span className="aboutStartBatch2 p-3">
                    <img src={avtar}/>&nbsp;Good Services &nbsp;&nbsp;
                    &nbsp;                  </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

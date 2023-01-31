import React from "react";
import "./Footer.css";
import logow from "./Assets/logow.svg";
import s1 from "./Assets/fb.svg";
import s2 from "./Assets/insta.svg";
import s3 from "./Assets/twitter.svg";
import s4 from "./Assets/linkedin.svg";
const Foooter = () => {
  return (
    <>
      <div className="footerMain c-white  mt-5">
        <div className="d-flex justify-content-center">
          <div className="footerInner mt-3">
            <div className="container row m-0 ">
              <div className="col-6">
                <div className="mt-5">
                  <img src={logow} />
                  <p className="mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="container row m-0 mt-5">
                  <div className="col-6">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <p className="m-2">Usefull Links</p>
                      <p className="m-2">Home</p>
                      <p className="m-2">About Us</p>
                      <p className="m-2">Services</p>
                      <p className="m-2">Contact Us</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-center align-items-center flex-column mb-5">
                      <p className="m-2">Follow Us</p>
                      <p className="footerSocial m-1">
                        {" "}
                        <img src={s1} />{" "}
                      </p>
                      <p className="footerSocial m-1">
                        {" "}
                        <img src={s2} />{" "}
                      </p>
                      <p className="footerSocial m-1">
                        {" "}
                        <img src={s3} />{" "}
                      </p>
                      <p className="footerSocial m-1">
                        {" "}
                        <img src={s4} />{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col-12">
          <div className="d-flex justify-content-evenly">
            <p>Privacy policy</p>
            <p>Made Remotely By TanahAir Studio. Copyright 2020</p>
            <p>Term and Conditions </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foooter;

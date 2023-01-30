import React from "react";
import "./AboutNext.css";
import Avtar2 from "./Assets/avtar2.svg";
import Countries from "./Assets/country.svg";
import Projects from "./Assets/projects.svg";
import Bar from "./Assets/bar.svg";
import PersonCard from "./PersonCard";
import userProfile from "./Assets/userProfile.svg";
import userProfile2 from "./Assets/userProfile2.svg";
import userProfile3 from "./Assets/userProfile3.svg";

const AboutNext = () => {
  return (
    <>
      <div>
        <div className="aboutNextMain">
          <div className="d-flex justify-content-center flex-column">
            <div className="d-flex justify-content-center mt-5">
              <h2>Lorem Ipsum is simply dummy text of the printing and.</h2>
            </div>
            <div className="d-flex justify-content-center">
              <span className="fs-5 ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </span>
            </div>
          </div>
          <div className="aboutNextCard mt-5">
            <div className="row m-0">
              <div className="col-4 d-flex justify-content-center align-items-center">
                <span className="avtarBg m-4">
                  <img src={Avtar2} />
                </span>
                <span className="d-flex flex-column">
                  <p className="fs-3 fw-bolder m-0 c-black">90+</p>
                  <span>Clients</span>
                </span>
              </div>
              <div className="col-4 d-flex justify-content-evenly align-items-center">
                <img src={Bar} className="ml-5" />
                <div className="d-flex justify-content-center align-items-center">
                  <span className="avtarBg m-4">
                    <img src={Countries} />
                  </span>
                  <span className="d-flex flex-column">
                    <p className="fs-3 fw-bolder m-0 c-black">30+</p>
                    <span>Countries</span>
                  </span>
                </div>
                <img src={Bar} />
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <span className="avtarBg m-4">
                  <img src={Projects} />
                </span>
                <span className="d-flex flex-column">
                  <p className="fs-3 fw-bolder m-0 c-black">50+</p>
                  <span>Projects</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="aboutNextCardsMain">
            <div className="pt-5"></div>
            <div className="aboutNextCardsMainBlueBg pt-5">
              <div className="d-flex justify-content-center flex-column">
                <div className="d-flex justify-content-center mt-5 c-white">
                  <h2 id="TheExecutiveTeam">The Executive Team</h2>
                </div>
                <div className="d-flex justify-content-center">
                  <span className="fs-5 c-white tempClass">
                    There’s nothing I really wanted to do in life that I wasn’t
                    able to get good at. That’s my skill.{" "}
                  </span>
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <div className="container-fluid row gx-4 gy-5 m-0">
                    <div className="col-6">
                      <div className="d-flex justify-content-center c-black">
                        <PersonCard
                          name={"Shivam Rastogi"}
                          postion={"Managing Director"}
                          content={
                            "Shivam Rastogi is a finance professional with an MBA and over 3 years of experience in structured finance and cyber security. He has a strong track record of supporting middle market loan portfolios and ensuring compliance with cyber security regulations for multiple firms."
                          }
                          profile={userProfile}
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex justify-content-center c-black">
                        <PersonCard
                          name={"Harshit Dahlan"}
                          postion={"Founder & CEO"}
                          content={
                            "Harshit is a qualified Chartered Accountant (CA) with over 3 years of experience in Accounting and Hedge fund operations. He has worked with multi-National companies, holding different positions."
                          }
                          profile={userProfile2}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-flex justify-content-center c-black">
                        <PersonCard
                          name={"Shubham Agarwal"}
                          postion={" Director"}
                          content={
                            "Shubham Agarwal is an experienced professional in the field of accounting and finance with an MBA degree and over 5 years of experience in bookkeeping and accounting. He has worked with various private firms, providing support for their in-house accounting operations."
                          }
                          profile={userProfile3}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNext;

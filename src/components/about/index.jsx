import React from "react";
import "./about.css";
import "bootstrap/dist/css/bootstrap.min.css";
import author from "../header/me2.jpg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h1>ABOUT ME</h1>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="photo-wrapper">
              <img
                src={author}
                alt="Hovsep Stepanian"
                style={{ width: "100%" }}
              />
              <div className="photo-overlay">
                <div className="photo-text social">
                  <>
                    <a href="https://www.facebook.com/hovsep.antranik">
                      <FacebookShareButton className="icon-button">
                        <FacebookIcon className="icon" size={32} round={true} />
                      </FacebookShareButton>
                    </a>
                    <a href="https://twitter.com/hovsepantranig">
                      <TwitterShareButton className="icon-button">
                        <TwitterIcon className="icon" size={32} round={true} />
                      </TwitterShareButton>
                    </a>
                    <a href="https://www.linkedin.com/in/hovsep-stepanian-752554219/">
                      <LinkedinShareButton className="icon-button">
                        <LinkedinIcon className="icon" size={32} round={true} />
                      </LinkedinShareButton>
                    </a>
                  </>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 about-right">
            <>
              <h4>Hi I am Hovsep</h4>
            </>
            <p>
              I am from Iraq 💜 I am a junior Front-End web develompent &
              Graphic Designer, I am fluent in classics like HTML,CSS,
              Javascript 😎
            </p>
            <p>
              My Creative skills and experience field of Interest's are building
              new Web Technologies and Products and also in areas related to
              Deep Learning and Graphic Design make a logo 😉 Whenever possible,
              I also apply my passion for developing products with Node.js and
              Modern Javascript Library and Frameworks like React.js 😒
            </p>
            <p>
              My big brother Kevork is the main reason how I'm now he motivated
              me about web development I suddenly fell in love with programming
              and I have at least learn something, I think… 🤷‍♂️
            </p>
            <p>
              "Strive to build things that make a difference!"
              <br /> <b> H.Stepanian </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

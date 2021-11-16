import React from "react";

const Experience = () => {
  return (
    <section className="resume-main-wrapper container-fluid">
      <div id="resume" className="container">
        <h1>resume</h1>
        <div className="row d-flex">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="resume">
              <div className="my-5">
                <h1>education</h1>
              </div>
              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>B.Sc Computer Science</h3>
                    <h5>Computer Science & Information Systems Department</h5>
                    <h6>2016</h6>
                    <p>by Al Mansour University College</p>
                  </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>W3Schools</h3>
                    <h5>HTML&CSS</h5>
                    <h6>2019</h6>
                    <p>
                      W3Schools is optimized for learning, testing, and
                      training. Examples might be simplified to improve reading
                      and basic understanding.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>Udemy</h3>
                    <h5>Javascript</h5>
                    <h6>2021</h6>
                    <p>
                      The Complete JavaScript Course 2021: From Zero to Expert!
                      The modern JavaScript course for everyone! Master
                      JavaScript with projects, challenges and theory. Many
                      courses in one!
                    </p>
                  </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>Udemy</h3>
                    <h5>ReactJS</h5>
                    <h6>2021</h6>
                    <p>
                      Modern React with Redux Master React and Redux with React
                      Router, Webpack, and Create-React-App. Includes Hooks!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT COLOMN */}
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="resume">
              <div className="my-5">
                <h1>Tools</h1>
              </div>
              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>Adobe Photoshop</h3>
                    <h5>Design</h5>
                    <h6>2015</h6>
                  </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>Adobe Illustrator</h3>
                    <h5>Logo</h5>
                    <h6>2015</h6>
                  </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>Adobe Adobe After Effects</h3>
                    <h5>Video Edit</h5>
                    <h6>2020</h6>
                  </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>Git&Github</h3>
                    <h5>control system designed to handle everything</h5>
                    <h6>2021</h6>
                  </div>
                </div>
              </div>

              <div className="container wrapper">
                <div className="timeline-block">
                  <div className="marker"></div>
                  <div className="timeline-content">
                    <h3>Figma</h3>
                    <h5>User Interface Design App</h5>
                    <h6>2020</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import { FormattedMessage, useIntl } from 'react-intl';

const About = () => {
  
  const intl = useIntl();

  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">

        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="Computer man" alt="Computer man" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>
                  <FormattedMessage id="page.about.aboutMe.title" />
                </h3>
              </div>
              <div className="about-text">
                <p>
                  <FormattedMessage id="page.about.aboutMe.text2" />
                </p>
                <p>
                  <FormattedMessage id="page.about.aboutMe.text3" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="separated" />

        <div className="title">
          <h3>
            <FormattedMessage id="page.about.educationSkills.title" /> .
          </h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2013-2015</span>
                <h6>
                  <FormattedMessage id="page.about.educationSkills.education1.title" />
                </h6>
                <p>
                  <FormattedMessage id="page.about.educationSkills.education1.description" />
                </p>
              </li>
              <li>
                <span>2007-2008</span>
                <h6>
                  <FormattedMessage id="page.about.educationSkills.education2.title" />
                </h6>
                <p>
                  <FormattedMessage id="page.about.educationSkills.education2.description" />
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>
                <FormattedMessage id="page.about.educationSkills.skills.title" />
              </h3>
              <div className="skill-lt">
                  <h6>HTML 5</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "95%" }}>
                      <span data-toggle="tooltip" title="952%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>CSS 3</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "90%" }}>
                      <span data-toggle="tooltip" title="90%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>JavaScript</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span data-toggle="tooltip" title="85%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Angular</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span data-toggle="tooltip" title="85%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>React/Next.js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "75%" }}>
                      <span data-toggle="tooltip" title="75%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Node.js</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "50%" }}>
                      <span data-toggle="tooltip" title="50%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Sass/SCSS</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "80%" }}>
                      <span data-toggle="tooltip" title="80%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Java</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "85%" }}>
                      <span data-toggle="tooltip" title="85%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
                <div className="skill-lt">
                  <h6>Spring Boot</h6>
                  <div className="skill-bar">
                    <div className="skill-bar-in" style={{ width: "75%" }}>
                      <span data-toggle="tooltip" title="75%" />
                    </div>
                  </div>
                </div>
                {/* /skill */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default About;

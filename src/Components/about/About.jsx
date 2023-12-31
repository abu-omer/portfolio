import React from "react";
import "./about.css";
import omer from "../../assets/omer.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container  about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={omer} alt="About me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3 years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clints</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Experienced React developer proficient in building efficient and
            scalable web applications. Skilled in front-end development,
            component-based architecture, and state management with Redux.
            Strong understanding of modern JavaScript frameworks and libraries.
            Passionate about creating seamless user experiences and writing
            clean, maintainable code.
          </p>
          <a href="#contacts" className="btn btn-primary">
            Let's Talk'
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

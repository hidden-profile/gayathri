import React from "react";
import "./styles.scss";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader";
import { Animate } from "react-simple-animate";

import { FaPython } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaDatabase } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
const personalDetails = [
  {
    label: "Name",
    value: "Gayathri Karri",
  },
  {
    label: "Email",
    value: "gayathrikarri289@gmail.com",
  },
  {
    label: "Phone",
    value: "9381221289",
  },
];

const summary =
  "Hello, I'm Gayathri Karri, a dedicated and passionate computer science undergraduate with a keen interest in simplifying complex problems and developing innovative solutions. My journey into the world of coding and development is driven by a relentless curiosity and a commitment to continuous learning.  I love tackling new challenges and exploring the transformative power of education. I'm excited to connect with like-minded professionals and contribute meaningfully to the ever-evolving tech landscape. Let's collaborate and explore the endless possibilities that technology has to offer!";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personal">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Aspiring Developer</h3>
            <p>{summary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="details">Personal Information</h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__services">
            <div className="about__content__services__content">
              <div> <FaPython  size={60} color="var(--main-color)"/></div>
              <div><DiJavascript size={60} color="var(--main-color)"/></div>
              <div><FaDatabase size={60} color="var(--main-color)"/> </div>
              <div><FaLaptopCode size={60} color="var(--main-color)"/></div>
              </div>
        </div>
      </div>
    </section>
  );
};

export default About;

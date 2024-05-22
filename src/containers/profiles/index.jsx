import React, { useState } from "react";
import { ImProfile } from "react-icons/im";
import PageHeader from "../../components/pageHeader";
import Image1 from "../../images/profile1.jpg";
import Image2 from "../../images/profile2.jpg";
import Image3 from "../../images/profile3.jpg";
import Image4 from "../../images/profile4.jpg";
import Image5 from "../../images/profile5.jpg";
import Image6 from "../../images/profile6.jpg";
import "./styles.scss";

const Projects = () => {
  const [hoverval,setHoverval]=useState(null)
  function handleHover(id){
    setHoverval(id);
    
  }
    const data = [
    {
      project: "LeetCode",
      image: Image1,
      desc: "Highest Rating-1588",
      link: "https://leetcode.com/u/gayathrikarri289/",
    },
    {
      project: "CodeChef",
      image: Image2,
      desc: "3 star coder highest rating-1642",
      link: "https://www.codechef.com/users/gayathri622004",
    },
    {
      project: "GitHub",
      image: Image3,
      desc: "View my repositories here ",
      link: "https://github.com/hidden-profile",
    },
    {
      project: "HackerRank",
      image: Image4,
      desc: "View my badges and certifications here",
      link: "https://www.hackerrank.com/profile/gayathrikarri289",
    },
    {
      project: "LinkedIn",
      image: Image5,
      desc: "Connect with me",
      link: "https://www.linkedin.com/in/gayathri-karri-03a087243/",
    },
    {
      project: "Geeks For Geeks",
      image: Image6,
      desc: "View my profile",
      link: "https://www.geeksforgeeks.org/user/gayathrikes20/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
    },
  ];
  return (
    <section id="projects" className="projects">
      <PageHeader headerText="My Profiles" icon={<ImProfile size={40} />} />
      <div className="projects__content">
        {data.map((item,idx) => (
          <div key={item.project.trim()} className="projects__content__cards" onMouseEnter={()=>handleHover(idx)}
          onMouseLeave={()=>handleHover(null)}>
            <div className="projects__content__cards__imgwrap">
              <a>
                <img alt="no data" src={item.image} />
              </a>
            </div>
            <div className="overlay">
                {
                  idx===hoverval && (
                    <div>
                      <p className="head">{item.project}</p>
                       <p>{item.desc}</p>
                       <a href={item.link} target="_blank" rel="noopener noreferrer"><button>VISIT</button> </a>
                      </div>
                  )
                }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;

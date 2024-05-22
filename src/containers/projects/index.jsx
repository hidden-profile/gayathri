import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";
import PageHeader from "../../components/pageHeader";
import Image1 from "../../images/project1.jpg";
import Image2 from "../../images/project2.jpg";
import Image3 from "../../images/project3.jpg";
import Image4 from "../../images/project4.jpg";
import Image5 from "../../images/project5.jpg";
import Image6 from "../../images/project6.jpg";
import "./styles.scss";

const Projects = () => {
  const [hoverval,setHoverval]=useState(null)
  function handleHover(id){
    setHoverval(id);
    
  }
    const data = [
    {
      project: "Trade Liber",
      image: Image6,
      desc: "A responsive website for buying and selling used books, designed to benefit both sellers and buyers.This project was built using HTML, CSS, PHP, and MySQL, ensuring a seamless and user-friendly experience across all devices.",
      link: "https://github.com/hidden-profile/tradeliber-onlinebooksresellingsystem",
    },
    {
      project: "Student Database Management System",
      image: Image2,
      desc: "Application allows users to create, read, update, and delete student records efficiently, featuring a responsive interface with real-time data display in a treeview. ",
      link: "https://github.com/hidden-profile/Student-database-management-system",
    },
    {
      project: "QR Code Generator",
      image: Image4,
      desc: "This application enables users to generate QR codes by entering a name and URL, and it displays the generated QR code within the interface. ",
      link: "https://github.com/hidden-profile/QR-code-generator",
    },
    {
      project: "Todo App",
      image: Image5,
      desc: "A Full-Stack functioning Todo-List Application built using Django,Javascript,PostgreSQL",
      link: "https://github.com/hidden-profile/todo-app",
    },
    {
      project: "Taxi Fare Prediction",
      image: Image1,
      desc: "A Machine learning model that is used to predict the taxifare using different features",
      link: "https://github.com/hidden-profile/taxi-fare-prediction",
    },
    {
      project: "Snake Game",
      image: Image3,
      desc: "A Simple game created using tkinter library",
      link: "https://github.com/hidden-profile/Snake-game",
    },
  ];
  return (
    <section id="projects" className="projects">
      <PageHeader headerText="My Projects" icon={<GrProjects size={40} />} />
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

import React from "react";
import { GrResume } from "react-icons/gr";
import PageHeader from '../../components/pageHeader';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import './styles.scss';
import { FaUserGraduate } from "react-icons/fa";
import { MdWork } from "react-icons/md";
const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeader headerText="My Resume" icon={<GrResume size={40} />} />
            <div className="timeline">
                <div className="timeline__exp">
                    <h3 className="timeline__exp__head">Experience</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var(--main-color)">
                        {data.experience.map((item, i) => (
                            <VerticalTimelineElement key={i} className="timeline__exp__data"
                            contentStyle={{
                                background:'none',
                                color:'var(--subtext)',
                                border:'1.5px solid var(--main-color)',
                            }}
                            icon={<MdWork/>}
                            iconStyle={
                                {
                                    background:'#0f56de',
                                    color:"var(--main-color)",
                                }
                            }>
                                <div className="element-data">
                                    <h3 className="element-data-title">
                                        {item.title} , </h3>
                                    <h4 className="element-data-subtitle">
                                        {item.at}
                                    </h4>
                                    
                                </div>
                                <p className="desc">{item.desc}</p>
                                    <p className="time">{item.time}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
                <div className="timeline__edu">
                    <h3 className="timeline__edu__head">Education</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var(--main-color)">
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement key={i} className="timeline__edu__data"
                            contentStyle={{
                                background:'none',
                                color:'var(--subtext)',
                                border:'1.5px solid var(--main-color)',
                            }}
                            icon={<FaUserGraduate/>}
                            iconStyle={
                                {
                                    background:'#0f56de',
                                    color:"var(--main-color)",
                                }
                            }>
                                <div className="element-data">
                                    <h3 className="element-data-title">
                                        {item.title} , </h3>
                                    <h4 className="element-data-subtitle">
                                        {item.at}
                                    </h4>
                                    
                                </div>
                                <p className="desc">{item.desc}</p>
                                    <p className="time">{item.time}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;

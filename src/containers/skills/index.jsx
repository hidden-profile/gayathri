import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeader from '../../components/pageHeader';
import { skilldata } from './utils';
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import './styles.scss';
const Skills = () => {
    return (
        <section id="skills" className="skills">
            <PageHeader headerText="My Skills" icon={<GiSkills size={40} />} />
            <div className="skills__content">
                {skilldata.map((item, i) => (
                    <div className="skills__content__data" key={i}>
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{
                                transform: 'translateX(-200px)',
                            }}
                            end={{
                                transform: 'translate(0px)',
                            }}>
                            <h3 className="skills__content__data__category">{item.label}</h3>
                            <div className="skills__content__data__details">
                                {item.data.map((skillitem, j) => (
                                    <AnimateKeyframes
                                        play
                                        duration={1}
                                        keyframes={["opacity: 1", "opacity:0"]}
                                        iterationCount={1}
                                        key={j}>
                                        <div className="progressbar" key={j}>
                                            <p>{skillitem.skill}</p>
                                            <Line
                                                percent={skillitem.percent}
                                                strokeWidth="2"
                                                strokeColor="var(--main-color)"
                                                trailWidth={"2"}
                                                strokeLinecap="round"
                                            />
                                        </div>
                                    </AnimateKeyframes>
                                ))}
                            </div>
                        </Animate>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;

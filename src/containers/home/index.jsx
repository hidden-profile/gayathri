import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss';
import { Animate } from 'react-simple-animate';
import Resume1 from '../../images/resume new.pdf';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        // Open the resume PDF in a new tab/window
        window.open(Resume1, '_blank');
    }

    return (
        <>
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>Hello, I'm Gayathri<br />Reimagining Tech, Ready to Contribute</h1>
            </div>
            <Animate
                play={true}
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(500px)'
                }}
                end={{
                    transform: 'translateY(0px)'
                }}
            >
                <div className="home__contact">
                    <button onClick={handleNavigate}>View CV</button>
                </div>
            </Animate>
        </section>
        </>
    );
}

export default Home;

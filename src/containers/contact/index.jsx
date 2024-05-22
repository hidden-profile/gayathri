import React, { useRef } from "react";
import { GrContact } from "react-icons/gr";
import PageHeader from '../../components/pageHeader';
import { Animate } from 'react-simple-animate';
import emailjs from 'emailjs-com';
import './styles.scss';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gayathri', 'gayathri', form.current, 'pBMClaAjwIpNp3FXP')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message, please try again later.');
            });
    };

    return (
        <section id="contact" className="contact">
            <PageHeader headerText="Contact Me" icon={<GrContact size={40} />} />
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}>
                    <h3 className="contact__content__head">Let's Connect</h3>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}>
                    <form ref={form} onSubmit={sendEmail} className="contact__content__form">
                        <div className="contact__content__form__data">
                            <div className="namewrap">
                                <input required name="name" className="inputName" type={'text'} />
                                <label htmlFor="name" className="namelabel">Name</label>
                            </div>
                            <div className="emailwrap">
                                <input required name="email" className="inputEmail" type={'email'} />
                                <label htmlFor="email" className="emaillabel">Email</label>
                            </div>
                            <div className="descwrap">
                                <textarea required name="message" className="inputDesc" type={'text'} rows="5" />
                                <label htmlFor="message" className="desclabel">Description</label>
                            </div>
                        </div>
                        <button type="submit">SUBMIT</button>
                    </form>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;

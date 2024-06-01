import React from 'react';
import { useInView } from 'react-intersection-observer';
// تأكد من أن هذا الملف يحتوي على CSS الذي أضفناه أعلاه

export default function AboutMe() {
   
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    
    

    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/ahmedfaris.png" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className={`hero--section--content ${inView ? 'animate' : ''}`} ref={ref}>
                    <p className="section--title">About</p>
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section-description">
                        I am Ahmed Faris, a graduate of the Faculty of Information Technology (IT), Software Department.
                        Founder of the Qweas platform, I have taught more than 100,000 student in the field of information technology,
                        and currently I am a front-end and back-end developer, as well as a ui/ux designer.
                        I always develop my skills by watching the lessons on Udemy, the YouTube platform, or from books, and then I teach them.
                        On my YouTube platform, Qweas, and teaching my friends.
                    </p>
                    <p className="hero--section-description">
                        My goal is to be an expert in the field of website development and mobile application development.
                    </p>
                </div>
            </div>
            <div id='youtube'>

            </div>
        </section>
    );
}

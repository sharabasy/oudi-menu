import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import ourMission from "../../assets/images/our mission.png";
import ourVision from "../../assets/images/our vision.png";

import style from "./whoAreWe.module.scss";

const WhoAreWe = () => {
    return (
        <div className={`${style["page"]} full-width flex-col-top-start`}>
            <h1 className="size-34px pt-sans">Who Are We ?</h1>
            <p className="space-none size-18px open-sans">Welcome to [Our Agency Name]!</p>
            <p className={`${style['text']} size-18px open-sans`}>
                We are a team of passionate and skilled developers, dedicated to creating innovative solutions and pushing the boundaries of technology. With expertise in various domains, we bring a diverse set of skills to the table, allowing us to tackle complex projects and deliver exceptional results.
            </p>
            <div className={style["divider"]} /> {/* Add a horizontal rule (line) */}
            <div className={`${style["mission"]} white flex-row-between2col`}>
                <img className={style['img']} src={ourMission} alt="Our Mission" />
                <p className={`${style["text"]} space-none size-20px inter margin-12px-H`}>
                    Our mission is to build cutting-edge applications and systems that not only meet but exceed the expectations of our clients. We strive to create user-friendly and seamless experiences that leave a lasting impact on users and businesses alike.
                </p>
            </div>
            <div className={style["divider"]} /> {/* Add a horizontal rule (line) */}
            <ScrollAnimation animateIn="fadeIn" animateOnce animatePreScroll={false} className={`${style["vision"]} white flex-row-between2col`}>
                <p className={`${style["text"]} space-none size-20px inter margin-12px-H`}>
                    We envision a future where technology knows no bounds. We strive to create a world where seamless user experiences, intelligent automation, and intuitive AI systems become an integral part of everyday life. Our vision is to lead the way in shaping the digital landscape, making it accessible and beneficial to all.
                </p>
                <img className={style['img']} src={ourVision} alt="Our Vision" />
            </ScrollAnimation>
            <div className={style["divider"]} /> {/* Add a horizontal rule (line) */}
            <h1 className="size-34px pt-sans">What Sets Us Apart ?</h1>
            <ScrollAnimation animateIn="fadeIn" animateOnce animatePreScroll={false} className="flex-row-top-start2col full-width">
                <h3 className="margin-4px-V size-24px pt-sans">1- Diverse Expertise: </h3>
                <p className={`${style["text"]} space-none size-18px inter margin-12px-H`}>
                    Our team comprises specialists in frontend development, backend development, Flutter, and artificial intelligence. This diverse skill set enables us to cover a wide range of technologies and platforms, giving us a competitive edge in the industry.
                </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce animatePreScroll={false} className="flex-row-top-start2col full-width">
                <h3 className="margin-4px-V size-24px pt-sans">2- Collaborative Approach: </h3>
                <p className={`${style["text"]} space-none size-18px inter margin-12px-H`}>
                    Collaboration is at the heart of our work culture. We believe that the best solutions emerge when different perspectives come together, and our team members actively contribute their unique insights to each project.
                </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce animatePreScroll={false} className="flex-row-top-start2col full-width">
                <h3 className="margin-4px-V size-24px pt-sans">3- Innovation-Driven: </h3>
                <p className={`${style["text"]} space-none size-18px inter margin-12px-H`}>
                    We thrive on challenges and are always eager to explore new technologies and approaches. Our innovative mindset allows us to continuously improve our skills and deliver creative solutions.
                </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce animatePreScroll={false} className="flex-row-top-start2col full-width">
                <h3 className="margin-4px-V size-24px pt-sans">4- Client-Centric Focus: </h3>
                <p className={`${style["text"]} space-none size-18px inter margin-12px-H`}>
                    Our clients are at the core of everything we do. Understanding their needs, goals, and vision is paramount, and we tailor our solutions to meet their specific requirements.
                </p>
            </ScrollAnimation>
        </div>
    );
};

export default WhoAreWe;

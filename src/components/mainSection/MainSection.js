import React from "react";
import { useState, useEffect } from "react";
import headerImg from "../../assets/images/header-img.svg";
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import style from './mainSection.module.scss';

export const MainSection = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Designers", "App Designers", "UI/UX Designers"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className={`flex-row-between flex-wrap ${style['banner']}`} id="home">
            <div className={``}>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className={`white ${style['banner--tagline']}`}>Welcome to our Portfolio</span>
                            <h1 className={`white ${style['banner--title']}`}>{`Hi! We're Actore`} </h1>
                            <span className={style['txt-rotate']} dataPeriod="1000" data-rotate='[ "Web Designers", "App Designers", "UI/UX Designers" ]'><span className={`white size-36px ${style['banner--subtitle']}`}>{text}</span></span>
                        </div>}
                </TrackVisibility>
            </div>
            <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Header Img" />
                    </div>}
            </TrackVisibility>
        </section>
    )
}
export default MainSection;

import React, { useState, useEffect } from "react";
import style from './portfolioSlider.module.scss';
import portfolioItems from '../../data/portfolioItems.js';

const PortfolioSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        const rotateToNextProject = () => {
            setIsLeaving(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
                setIsLeaving(false);
            }, 800);
        };

        const intervalId = setInterval(rotateToNextProject, 5000);

        return () => clearInterval(intervalId);
    }, [isLeaving, currentIndex]);

    const handleSlideClick = (index) => {
        setIsLeaving(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsLeaving(false);
        }, 800);
    };

    const currentProject = portfolioItems[currentIndex];

    return (
        <div className={`${style['portfolio-slider']}`}>
            <div className={`full-width flex-row-center ${style['portfolio-slider--header']}`}>
                <div className={`inter size-32px white ${style['portfolio-slider--header--title']}`}>
                    Our Work
                </div>
            </div>
            <svg className={`${style['portfolio-slider--top-wave']}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#3CB4E5" fillOpacity="1" d="M0,160L30,160C60,160,120,160,180,149.3C240,139,300,117,360,133.3C420,149,480,203,540,229.3C600,256,660,256,720,218.7C780,181,840,107,900,101.3C960,96,1020,160,1080,154.7C1140,149,1200,75,1260,37.3C1320,0,1380,0,1410,0L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
            <div className={`full-width flex-col-between ${style['portfolio-slider-section']}`} >
                <div className={`flex-row2col ${style['portfolio-slider--header']}`}>
                    <div
                        className={`full-width ${currentProject.platform === 'mobile' ? style['phone-image'] : style['laptop-image']} ${isLeaving ? style['slideOutAndRotate'] : ''}`}
                    >
                        <img src={currentProject.coverImage} alt={`Cover for ${currentProject.title}`} />
                    </div>
                    <div className={`flex-col-between white width-50-100 ${style['project-details']} ${isLeaving ? style['slideOutAndRotateLeft'] : ''}`} style={{ backgroundColor: currentProject.backgroundColor }}>
                        <div className=" size-32px">{currentProject.title}</div>
                        <p>{currentProject.description}</p>
                    </div>
                </div>
                <div className={`full-width flex-row-center ${style['project-circles']}`}>
                    {portfolioItems.map((project, index) => (
                        <div
                            key={project.id}
                            className={`${style['project-circle']} pointer white-bg radius-circular shadow-5px ${currentIndex === index ? style['active-circle'] : ''
                                }`}
                            onClick={() => handleSlideClick(index)}
                        />
                    ))}
                </div>
            </div>
            <svg className={style['portfolio-slider--bottom-wave']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 380">
                <path fill={currentProject.backgroundColor} d="m0,255l48,-5.3c48,-5.7 144,-15.7 240,10.6c96,26.7 192,90.7 288,106.7c96,16 192,-16 288,-53.3c96,-37.7 192,-79.7 288,-69.4c96,10.7 192,74.7 240,106.7l48,32l0,-256l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,128z" id="svg_1" />
                <path fill={currentProject.backgroundColor} d="m0,0l60,16c60,16 180,48 300,53.3c120,5.7 240,-16.3 360,-10.6c120,5.3 240,37.3 360,32c120,-5.7 240,-47.7 300,-69.4l60,-21.3l0,160l-60,0c-60,0 -180,0 -300,0c-120,0 -240,0 -360,0c-120,0 -240,0 -360,0c-120,0 -240,0 -300,0l-60,0l0,-160z" id="svg_2" />
            </svg>

        </div>
    );
};

export default PortfolioSlider;

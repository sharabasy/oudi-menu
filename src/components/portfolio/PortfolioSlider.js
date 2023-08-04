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
            }, 2500);
        };

        const intervalId = setInterval(rotateToNextProject, 5000);

        return () => clearInterval(intervalId);
    }, [isLeaving, currentIndex]);

    const handleSlideClick = (index) => {
        setIsLeaving(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsLeaving(false);
        }, 1000);
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
                <div className={`full-width flex-row-center`}>
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
            <svg className={style['portfolio-slider--bottom-wave']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <text x="20" y="160" fill="white" fontSize="24">test</text>
                <path fill={currentProject.backgroundColor} fillOpacity="1" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,218.7C840,224,960,256,1080,250.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>

        </div>
    );
};

export default PortfolioSlider;

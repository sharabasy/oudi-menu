import React, { useState, useEffect } from "react";
import style from './portfolioSlider.module.scss';
import tag from '../../assets/images/tag.svg';
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
        <div>
            <div className={`full-width flex-row-center ${style['portfolio-slider--header']}`}>
                <div className={`inter size-32px ${style['portfolio-slider--header--title']}`}>
                    Our Work
                </div>
                <img src={tag} alt="background of header" />
            </div>
            <div className={`full-width flex-col-between ${style['portfolio-slider-section']}`} style={{ backgroundColor: currentProject.backgroundColor }}>
                <div className={`flex-row2col ${style['portfolio-slider--header']}`}>
                    <div
                        className={`full-width ${currentProject.platform === 'mobile' ? style['phone-image'] : style['laptop-image']} ${isLeaving ? style['slideOutAndRotate'] : ''}`}
                    >
                        <img src={currentProject.coverImage} alt={`Cover for ${currentProject.title}`} />
                    </div>
                    <div className={`flex-col-between width-50-100 ${style['project-details']} ${isLeaving ? style['slideOutAndRotateLeft'] : ''}`}>
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
            <div>
            </div>
        </div>
    );
};

export default PortfolioSlider;

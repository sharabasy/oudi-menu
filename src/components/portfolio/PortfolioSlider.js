import React, { useState, useEffect } from "react";
import style from './portfolioSlider.module.scss';
import tag from '../../assets/images/tag.svg';
import portfolioItems from '../../data/portfolioItems.js';

const PortfolioSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Function to rotate to the next project after 0.5 minutes (30 seconds)
        const rotateToNextProject = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
        };

        // Set an interval to rotate the project every 0.5 minutes
        const intervalId = setInterval(rotateToNextProject, 30000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);


    const handleSlideClick = (index) => {
        setCurrentIndex(index);
    };

    const handlePrevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? portfolioItems.length - 1 : prevIndex - 1));
    };

    const handleNextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
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
                <div className="flex-row-between full-width">
                    <div className={`flex-row-center radius-circular pointer ${style['arrow']}`} onClick={handlePrevProject}>
                        &lt;
                    </div>
                    <img src={currentProject.coverImage} alt={`Cover for ${currentProject.title}`} />
                    <div className={`flex-row-center radius-circular pointer ${style['arrow']}`} onClick={handleNextProject}>
                        &gt;
                    </div>
                </div>
                <div className="white size-32px">{currentProject.title}</div>
                <p className="white">{currentProject.description}</p>
                <div className={`full-width flex-row-center ${style['project-circles']}`}>
                    {portfolioItems.map((project, index) => (
                        <div
                            key={project.id}
                            className={`${style['project-circle']} pointer white-bg radius-circular shadow-5px ${currentIndex === index ? style['active-circle'] : ''}`}
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
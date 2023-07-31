import React, { useState, useEffect } from "react";
import style from './portfolioSlider.module.scss';
import tag from '../../assets/images/tag.svg';
import portfolioItems from '../../data/portfolioItems.js';

const PortfolioSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentProjectId, setCurrentProjectId] = useState(0);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        // Function to rotate to the next project after 0.5 minutes (30 seconds)
        const rotateToNextProject = () => {
            setIsLeaving(true); // Set leaving state to trigger leave animation
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
                setIsLeaving(false); // Reset leaving state after the animation duration (adjust as needed)
            }, 3000); // Assuming 0.5 seconds is the animation duration, adjust this as needed

        };

        // Set an interval to rotate the project every 0.5 minutes
        const intervalId = setInterval(rotateToNextProject, 8000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    const handleSlideClick = (index) => {
        setIsLeaving(true); // Set leaving state to trigger leave animation
        setTimeout(() => {
            setCurrentIndex(index);
            setCurrentProjectId(index); // Update currentProjectId when a project circle is clicked
            setIsLeaving(false); // Reset leaving state after the animation duration (adjust as needed)
        }, 3000); // Assuming 0.5 seconds is the animation duration, adjust this as needed
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
                <div
                    className={`flex-row-between full-width ${currentProject.platform === 'mobile' ? style['phone-image'] : style['laptop-image']} ${isLeaving ? style['slideOutAndRotate'] : ''}`}
                >
                    <img src={currentProject.coverImage} alt={`Cover for ${currentProject.title}`} className={style['project-image']} />
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

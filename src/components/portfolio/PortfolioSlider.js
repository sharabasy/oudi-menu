import React, { useState, useEffect, useMemo } from "react";
import style from './portfolioSlider.module.scss';
import tag from '../../assets/images/tag.svg';

const PortfolioSlider = () => {
    const portfolioItems = useMemo(() => [
        {
            id: 1,
            backgroundColor: '#f7b267',
            coverImage: 'https://via.placeholder.com/300',
            title: 'Project 1',
            description: 'This is the first project description.',
            technologies: ['react', 'nodejs', 'mongodb']
        },
        {
            id: 2,
            backgroundColor: '#f79d65',
            coverImage: 'https://via.placeholder.com/250',
            title: 'Project 2',
            description: 'This is the second project description.',
            technologies: ['Flutter', 'Dart', 'Firebase']
        },
        {
            id: 3,
            backgroundColor: '#f4845f',
            coverImage: 'https://via.placeholder.com/300',
            title: 'Project 3',
            description: 'This is the third project description.',
            technologies: ['figma']
        },
        {
            id: 4,
            backgroundColor: '#f27059',
            coverImage: 'https://via.placeholder.com/200',
            title: 'Project 4',
            description: 'This is the fourth project description.',
            technologies: ['react', 'nodejs', 'mongodb']
        },
        // Add more portfolio items as needed...
    ], []);

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
    }, [portfolioItems]);


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
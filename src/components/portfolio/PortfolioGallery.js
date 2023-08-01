import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./portfolioGallery.module.scss";
import portfolioItems from "../../data/portfolioItems.js";

const PortfolioGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectHover = (projectId) => {
        setSelectedProject(projectId);
    };

    const handleProjectHoverLeave = () => {
        setSelectedProject(null);
    };

    return (
        <div className={style["portfolio-gallery"]}>
            {portfolioItems.map((project, index) => (
                <motion.div
                    key={project.id}
                    className={style["portfolio-gallery--item"]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onMouseEnter={() => handleProjectHover(project.id)}
                    onMouseLeave={handleProjectHoverLeave}
                >
                    <motion.img
                        src={project.coverImage}
                        alt={`Cover for ${project.title}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />

                    {selectedProject === project.id && (
                        <motion.div
                            className={`flex-col-center ${style["portfolio-gallery--item-overlay"]}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={`size-24px inter font-bold margin-5px-V`}> {project.title} </div>
                            <div className={`size-16px`}>{project.description}</div>
                            <div className={`flex-row-center ${style["technology-tags"]}`}>
                                {project.technologies.map((technology) => (
                                    <div
                                        key={technology}
                                        className={`radius-20px ${style["technology-tag"]}`}
                                    >
                                        {technology}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default PortfolioGallery;

import React from "react";
import { motion } from "framer-motion";
import style from "./portfolioGallery.module.scss";
import portfolioItems from "../../data/portfolioItems.js";

const PortfolioGallery = () => {
    return (
        <div className={`flex-row-center flex-wrap ${style["portfolio-gallery"]}`}>
            {portfolioItems.map((project) => (
                <motion.div
                    key={project.id}
                    className={style["portfolio-gallery--item"]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Add scale animation on hover
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <motion.img
                        src={project.coverImage}
                        alt={`Cover for ${project.title}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <div className={`size-24px inter font-bold margin-5px-V`}>{project.title}</div>
                    <div className={`size-16px`}>{project.description}</div>
                    <div className={`flex-row-center ${style["technology-tags"]}`}>
                        {project.technologies.map((technology) => (
                            <div key={technology} className={`radius-20px ${style["technology-tag"]}`}>
                                {technology}
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default PortfolioGallery;

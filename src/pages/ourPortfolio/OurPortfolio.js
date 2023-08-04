import React from "react";

import style from './ourPortfolio.module.scss';
import PortfolioGallery from "../../components/portfolio/PortfolioGallery";
const OurPortfolio = () => {
    return (
        <div className={`${style['page']}`}>

            <h1 className="size-34px pt-sans flex-row-center white">Our Portfolio</h1>
            {/* Main section */}
            <PortfolioGallery />
            {/* Note: there will be a page for every item in the gallery, but not to think about it for now */}
        </div>
    );
};

export default OurPortfolio;
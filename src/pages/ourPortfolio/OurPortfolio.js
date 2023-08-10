import React from "react";

import PortfolioGallery from "../../components/portfolio/PortfolioGallery";

import { useSelector } from "react-redux";
import languages from "../../data/languages";

import style from './ourPortfolio.module.scss';

const OurPortfolio = () => {
    const lang = useSelector(state => state.language.language);
    const translate = languages[lang];

    return (
        <div className={`${style['page']}`}>
            <h1 className="size-34px pt-sans flex-row-center white">{translate.ourPortfolio}</h1>
            {/* Main section */}
            <PortfolioGallery />
            {/* Note: there will be a page for every item in the gallery, but not to think about it for now */}
        </div>
    );
};

export default OurPortfolio;
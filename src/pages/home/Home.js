import React from "react";

import NewsLetter from '../../components/newsLetter/NewsLetter';
import OurPartners from "../../components/ourPartners/OurPartners";
import PortfolioSlider from "../../components/portfolio/PortfolioSlider";

import style from './home.module.scss';
import MainSection from "../../components/mainSection/MainSection"
const Home = () => {
    return (
        <div className={`${style['page']}`}>
            <MainSection/>
            <PortfolioSlider/>
            <OurPartners/>
            <NewsLetter />
        </div>
    );
};

export default Home;
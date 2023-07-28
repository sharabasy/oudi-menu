import React from "react";

import style from './home.module.scss';
import OurPartners from "../../components/ourPartners/OurPartners";
import PortfolioSlider from "../../components/portfolio/PortfolioSlider";
const Home = () => {
    return (
        <div className={`${style['page']}`}>
            Home
            {/* Main Section */}
            <PortfolioSlider/>
            <OurPartners/>
            {/* News letter */}
        </div>
    );
};

export default Home;
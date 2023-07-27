import React from "react";

import NewsLetter from '../../components/newsLetter/NewsLetter';
import OurPartners from "../../components/ourPartners/OurPartners";

import style from './home.module.scss';
const Home = () => {
    return (
        <div className={`${style['page']}`}>
            Home
            {/* Main Section */}
            {/* Portfolio slider */}
            <OurPartners/>
            <NewsLetter />
        </div>
    );
};

export default Home;
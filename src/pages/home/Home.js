import React from "react";

import style from './home.module.scss';
import OurPartners from "../../components/ourPartners/OurPartners";
const Home = () => {
    return (
        <div className={`${style['page']}`}>
            Home
            {/* Main Section */}
            {/* Portfolio slider */}
            <OurPartners/>
            {/* News letter */}
        </div>
    );
};

export default Home;
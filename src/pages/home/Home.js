import React from "react";

import NewsLetter from '../../components/newsLetter/NewsLetter';

import style from './home.module.scss';

const Home = () => {
    return (
        <div className={`${style['page']}`}>
            Home
            {/* Main Section */}
            {/* Portfolio slider */}
            {/* Our Partners */}
            <NewsLetter />
        </div>
    );
};

export default Home;
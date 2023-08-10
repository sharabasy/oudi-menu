import React from "react";

import { useSelector } from "react-redux";
import languages from "../../data/languages";

import style from './footer.module.scss';

const Footer = () => {
    const lang = useSelector(state => state.language.language);
    const translate = languages[lang];

    return (
        <div className={`${style['footer']} white-bg flex-col-center`}>
            <div className={`${style['footer--address']} flex-row-center margin-2px-V`}>
                <p className="inter dark-blue size-14px"><i className="bi bi-geo-alt size-22px"></i> {translate.ourAddress}</p>
            </div>
            <div className={`${style['footer--contacts']} flex-row2col margin-12px-V flex-wrap`}>
                <p className={`${style['footer--contacts--slot']} inter dark-blue size-14px`}><i className="bi bi-envelope-open size-18px margin-2px-H"></i> placeholder@gmail.com</p>
                <p className={`${style['footer--contacts--slot']} inter dark-blue size-14px`}><i className="bi bi-whatsapp size-18px margin-2px-H"></i> (+20) 1222222222</p>
                <p className={`${style['footer--contacts--slot']} inter dark-blue size-14px`}><i className="bi bi-telephone size-18px margin-2px-H"></i> (+20) 1222222222</p>
            </div>
            <div className={`${style['footer--socials']} flex-row-center margin-12px-V`}>
                <a href="/" className={`${style['footer--socials--btn']}`}><i className="bi bi-facebook dark-blue size-24px margin-8px-H"></i></a>
                <a href="/" className={`${style['footer--socials--btn']}`}><i className="bi bi-instagram dark-blue size-24px pointer margin-8px-H"></i></a>
                <a href="/" className={`${style['footer--socials--btn']}`}><i className="bi bi-twitter dark-blue size-24px pointer margin-8px-H"></i></a>
                <a href="/" className={`${style['footer--socials--btn']}`}><i className="bi bi-linkedin dark-blue size-24px pointer margin-8px-H"></i></a>
            </div>
            <div className={`${style['footer--sign']} flex-row-center dark-blue sky-bg pt-sans size-14px`}>
                {translate.copyRight}
            </div>
        </div>
    );
};

export default Footer;
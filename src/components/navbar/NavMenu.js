import React from "react";

import { useLocation } from 'react-router-dom';
import router from '../../router/router';

import { CSSTransition } from 'react-transition-group';

import { useDispatch, useSelector } from "react-redux";
import { languageMutations } from "../../store/mutations";
import languages from "../../data/languages";

import style from './navMenu.module.scss';

const NavMenu = ({ isShown, close }) => {
    const location = useLocation();

    const goToPath = (path) => {
        if (location.pathname === path) {
            close();
            return;
        }
        router.navigate(path);
        close();
    };

    const dispatch = useDispatch();
    const lang = useSelector(state => state.language.language);
    const translate = languages[lang];

    const changeLangHandler = () => {
        if (lang === 'en') {
            dispatch(languageMutations.setLanguage('ar'));
            close();
            return;
        } else if (lang === 'ar') {
            dispatch(languageMutations.setLanguage('en'));
            close();
            return;
        }
    }

    return (
        <CSSTransition in={isShown} mountOnEnter unmountOnExit timeout={500} classNames={{ enterActive: style['menu-enter-active'], exitActive: style['menu-exit-active'] }}>
            <div className={`${style['nav-menu']} flex-col-top-start radius-5px white-bg`}>
                <div className={`${style['nav-menu--header']} full-width flex-row-between margin-10px-V`}>
                    <i className="bi bi-code-slash dark-blue size-40px"></i>
                    <i className={`${style['nav-menu--header--close']} bi bi-x-lg dark-blue size-32px pointer`} onClick={close}></i>
                </div>
                <div className={`${style['nav-menu--line']}`}></div>
                <div className={`${style['nav-menu--items']} full-width flex-col-left-start margin-10px-V`}>
                    <div onClick={goToPath.bind(null, '/')} className={`${style['nav-menu--items--item']} ${location.pathname === '/' ? style['nav-menu--items--item--pink-active'] + ' font-bold' : ''} ${lang === 'ar' ? style['ar'] : ''} pink pt-sans size-20px margin-8px-V pointer`}>
                        <i className="bi bi-house size-24px margin-12px-H"></i> {translate.home}
                    </div>
                    <div onClick={goToPath.bind(null, '/who-are-we')} className={`${style['nav-menu--items--item']} ${location.pathname === '/who-are-we' ? style['nav-menu--items--item--yellow-active'] + ' font-bold' : ''} ${lang === 'ar' ? style['ar'] : ''} yellow pt-sans size-20px margin-8px-V pointer`}>
                        <i className="bi bi-person-workspace size-24px margin-12px-H"></i> {translate.whoAreWe}
                    </div>
                    <div onClick={goToPath.bind(null, '/our-services')} className={`${style['nav-menu--items--item']} ${location.pathname === '/our-services' ? style['nav-menu--items--item--green-active'] + ' font-bold' : ''} ${lang === 'ar' ? style['ar'] : ''} green pt-sans size-20px margin-8px-V pointer`}>
                        <i className="bi bi-ui-checks size-24px margin-12px-H"></i> {translate.ourServices}
                    </div>
                    <div onClick={goToPath.bind(null, '/our-portfolio')} className={`${style['nav-menu--items--item']} ${location.pathname === '/our-portfolio' ? style['nav-menu--items--item--baby-blue-active'] + ' font-bold' : ''} ${lang === 'ar' ? style['ar'] : ''} baby-blue pt-sans size-20px margin-8px-V pointer`}>
                        <i className="bi bi-columns-gap size-24px margin-12px-H"></i> {translate.ourPortfolio}
                    </div>
                    <div onClick={goToPath.bind(null, '/contact-us')} className={`${style['nav-menu--items--item']} ${location.pathname === '/contact-us' ? style['nav-menu--items--item--orange-active'] + ' font-bold' : ''} ${lang === 'ar' ? style['ar'] : ''} orange pt-sans size-20px margin-8px-V pointer`}>
                        <i className="bi bi-telephone size-24px margin-12px-H"></i> {translate.contactUs}
                    </div>
                </div>
                <div className={`${style['nav-menu--line']}`}></div>
                <div className={`${style['nav-menu--footer']} full-width flex-row-between2col`}>
                    <div className={`${style['nav-menu--footer--language']} margin-10px-V flex-row-center pointer black text-shadow`} onClick={changeLangHandler}>
                        <div className={`${style['nav-menu--footer--language--title']} size-24px inter`}>{translate.language}</div>
                        <i className="bi bi-globe size-18px" />
                    </div>
                    <div className={`${style['nav-menu--footer--links']} margin-10px-V flex-row-center`}>
                        <a href="/" style={{ color: '#0c87ef' }} className={`${style['nav-menu--footer--btn']}`}><i className="bi bi-facebook size-20px margin-6px-H"></i></a>
                        <a href="/" style={{ color: '#f3b461' }} className={`${style['nav-menu--footer--btn']}`}><i className="bi bi-instagram size-20px pointer margin-6px-H"></i></a>
                        <a href="/" style={{ color: '#1da1f2' }} className={`${style['nav-menu--footer--btn']}`}><i className="bi bi-twitter size-20px pointer margin-6px-H"></i></a>
                        <a href="/" style={{ color: '#0a66c2' }} className={`${style['nav-menu--footer--btn']}`}><i className="bi bi-linkedin size-20px pointer margin-6px-H"></i></a>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default NavMenu;
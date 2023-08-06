import React, { useEffect, useState } from "react";
import ReactImg from '../../assets/images/react.png';
import Flutter from '../../assets/images/flutter.png';
import NodeJS from '../../assets/images/node-js.png';
import Kubernetes from '../../assets/images/Kubernetes.png';

import style from './ourServices.module.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

const OurServices = () => {
    const [mobile, setMobile] = useState(window.innerWidth <= 992);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 992);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const descAnchor = mobile ? 'top-center' : 'center-center';

    AOS.init({
        duration: 300,
        easing: 'ease-in-out',
    });

    return (
        <div className={`${style['page']} full-width flex-col-top-start`}>
            <h1 className="size-34px pt-sans white text-shadow">Our Services</h1>
            <div className={`${style['services']} full-width shadow-5px white-bg radius-10px`}>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <div data-aos-anchor-placement="top-center" data-aos={mobile ? 'fade-up' : 'fade-down-right'} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--right']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px flex-col-center`}>
                            <img src={ReactImg} alt="React" className={`${style['piece--cont--img']}`} />
                            React.js
                        </div>
                    </div>
                    <div data-aos-anchor-placement={descAnchor} data-aos={mobile ? 'fade-up' : 'fade-down-left'} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--description--left']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--top--responsive']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px flex-col-center`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                </div>
                <div className={`${style['service']} ${style['reverse']} flex-row-between full-width`}>
                    <div data-aos-anchor-placement={descAnchor} data-aos={mobile ? 'fade-up' : 'fade-up-right'} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--right']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px flex-col-center`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                    <div data-aos-anchor-placement="top-center" data-aos={mobile ? 'fade-up' : 'fade-up-left'} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--head--left']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px flex-col-center`}>
                            <img src={Flutter} alt="Flutter" className={`${style['piece--cont--img']}`} />
                            Flutter
                        </div>
                    </div>
                </div>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <div data-aos-anchor-placement="top-center" data-aos={mobile ? 'fade-up' : 'fade-up-right'} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--right']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px flex-col-center`}>
                            <img src={NodeJS} alt="NodeJS" className={`${style['piece--cont--img']}`} />
                            NodeJS
                        </div>
                    </div>
                    <div data-aos-anchor-placement={descAnchor} data-aos={mobile ? 'fade-up' : 'fade-up-left'} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--description--left']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px flex-col-center`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                </div>
                <div className={`${style['service']} ${style['reverse']} flex-row-between full-width`}>
                    <div data-aos-anchor-placement={descAnchor} data-aos={mobile ? 'fade-up' : 'fade-up-right'} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--right']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px flex-col-center`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                    <div data-aos-anchor-placement="top-center" data-aos={mobile ? 'fade-up' : 'fade-up-left'} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--head--left']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom--responsive']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px flex-col-center`}>
                            <img src={Kubernetes} alt="Kubernetes" className={`${style['piece--cont--img']}`} />
                            Kubernetes
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={style['wave']}>
                <path fill="#fff" fill-opacity="1" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,213.3C672,224,768,192,864,165.3C960,139,1056,117,1152,144C1248,171,1344,245,1392,282.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>

        </div>
    );
};

export default OurServices;
import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ReactImg from '../../assets/images/react.png';
import Flutter from '../../assets/images/flutter.png';
import NodeJS from '../../assets/images/node-js.png';
import Kubernetes from '../../assets/images/Kubernetes.png';

import style from './ourServices.module.scss';

const OurServices = () => {
    return (
        <div className={`${style['page']} full-width flex-col-top-start`}>
            <h1 className="size-34px pt-sans white text-shadow">Our Services</h1>
            <div className={`${style['services']} full-width shadow-5px white-bg radius-10px`}>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <ScrollAnimation duration={2} animateIn="fadeIn" offset={250} animatePreScroll={false} initiallyVisible className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--right']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px flex-col-center`}>
                            <img src={ReactImg} alt="React" className={`${style['piece--cont--img']}`} />
                            React.js
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation duration={2} animateIn="fadeIn" offset={350} animatePreScroll={false} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--description--left']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--top--responsive']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </ScrollAnimation>
                </div>
                <div className={`${style['service']} ${style['reverse']} flex-row-between full-width`}>
                    <ScrollAnimation duration={2} animateIn="fadeIn" offset={350} animatePreScroll={false} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--right']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </ScrollAnimation>
                    <ScrollAnimation duration={2} animateIn="fadeIn" offset={250} animatePreScroll={false} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--head--left']} dark-blue-bg`}></div>
                        <div className={`${`${style['piece--head--bottom']} dark-blue-bg`} ${style['r-side']}`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>
                            <img src={Flutter} alt="Flutter" className={`${style['piece--cont--img']}`} />
                            Flutter
                        </div>
                    </ScrollAnimation>
                </div>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <ScrollAnimation duration={2} animateIn="fadeIn" offset={250} animatePreScroll={false} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--right']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>
                            <img src={NodeJS} alt="NodeJS" className={`${style['piece--cont--img']}`} />
                            NodeJS
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation duration={2} animateIn="fadeIn" offset={350} animatePreScroll={false} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--description--left']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </ScrollAnimation>
                </div>
                <div className={`${style['service']} ${style['reverse']} flex-row-between full-width`}>
                    <ScrollAnimation duration={2} animateIn="fadeIn" offset={350} animatePreScroll={false} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--right']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </ScrollAnimation>
                    <ScrollAnimation duration={2} animateIn="fadeIn" offset={250} animatePreScroll={false} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--head--left']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom--responsive']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>
                            <img src={Kubernetes} alt="Kubernetes" className={`${style['piece--cont--img']}`} />
                            Kubernetes
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
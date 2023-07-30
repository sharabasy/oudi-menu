import React from "react";

import style from './ourServices.module.scss';

const OurServices = () => {
    return (
        <div className={`${style['page']} full-width flex-col-top-start`}>
            <h1 className="size-34px pt-sans">Our Services</h1>
            <div className={`${style['services']} full-width shadow-5px radius-10px`}>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <div className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--right']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>React</div>
                    </div>
                    <div className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--description--left']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                </div>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <div className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--right']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                    <div className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--head--left']} dark-blue-bg`}></div>
                        <div className={`${`${style['piece--head--bottom']} dark-blue-bg`} ${style['r-side']}`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>Flutter</div>
                    </div>
                </div>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <div className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--right']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>NodeJS</div>
                    </div>
                    <div className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--description--left']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                </div>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <div className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--right']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                    <div className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--head--left']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>React Native</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
import React, { useEffect, useRef, useState } from "react";

import style from './ourServices.module.scss';

const OurServices = () => {
    const pieceRefs = useRef([]);
    const [activePieceIndex, setActivePieceIndex] = useState(0);

    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        pieceRefs.current.forEach((ref, index) => {
            const pieceRect = ref.getBoundingClientRect();
            if (pieceRect.top < windowHeight * 0.7) {
                setActivePieceIndex(index);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <div className={`${style['page']} full-width flex-col-top-start`}>
            <h1 className="size-34px pt-sans">Our Services</h1>
            <div className={`${style['services']} full-width shadow-5px radius-10px`}>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <div ref={ref => pieceRefs.current[0] = ref} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center ${activePieceIndex >= 0 ? style['animate'] : ''}`}>
                        <div className={`${style['piece--head--right']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>React</div>
                    </div>
                    <div ref={ref => pieceRefs.current[1] = ref} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center ${activePieceIndex >= 1 ? style['animate'] : ''}`}>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--description--left']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--top--responsive']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                </div>
                <div className={`${style['service']} ${style['reverse']} flex-row-between full-width`}>
                    <div ref={ref => pieceRefs.current[2] = ref} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center ${activePieceIndex >= 2 ? style['animate'] : ''}`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--right']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                    <div ref={ref => pieceRefs.current[3] = ref} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center ${activePieceIndex >= 3 ? style['animate'] : ''}`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--head--left']} dark-blue-bg`}></div>
                        <div className={`${`${style['piece--head--bottom']} dark-blue-bg`} ${style['r-side']}`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>Flutter</div>
                    </div>
                </div>
                <div className={`${style['service']} flex-row-between full-width`}>
                    <div ref={ref => pieceRefs.current[4] = ref} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center ${activePieceIndex >= 4 ? style['animate'] : ''}`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--right']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>NodeJS</div>
                    </div>
                    <div ref={ref => pieceRefs.current[5] = ref} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center ${activePieceIndex >= 5 ? style['animate'] : ''}`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--description--left']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--bottom']} baby-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                </div>
                <div className={`${style['service']} ${style['reverse']} flex-row-between full-width`}>
                    <div ref={ref => pieceRefs.current[6] = ref} className={`${style['piece']} ${style['piece--description']} baby-blue-bg radius-10px flex-row-center ${activePieceIndex >= 6 ? style['animate'] : ''}`}>
                        <div className={`${style['piece--description--top']} baby-blue-bg`}></div>
                        <div className={`${style['piece--description--right']} baby-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-12px`}>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque accusantium quod minus obcaecati fugit, quae maiores minima pariatur reprehenderit ab consectetur magni aperiam eveniet inventore cupiditate natus distinctio, est consequuntur.</div>
                    </div>
                    <div ref={ref => pieceRefs.current[7] = ref} className={`${style['piece']} ${style['piece--head']} dark-blue-bg radius-10px flex-row-center ${activePieceIndex >= 7 ? style['animate'] : ''}`}>
                        <div className={`${style['piece--head--top']} dark-blue-bg ${style['r-side']}`}></div>
                        <div className={`${style['piece--head--left']} dark-blue-bg`}></div>
                        <div className={`${style['piece--head--bottom--responsive']} dark-blue-bg`}></div>
                        <div className={`${style['piece--cont']} white inter size-24px`}>React Native</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
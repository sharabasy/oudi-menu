import React, { useState } from "react";

import { CSSTransition } from 'react-transition-group';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useSelector } from "react-redux";
import languages from "../../data/languages";

import style from './keepInTouchForm.module.scss';

const KeepInTouchForm = () => {
    const [formShown, setFormShown] = useState(true);
    const [coverShown, setCoverShown] = useState(false);

    const lang = useSelector(state => state.language.language);
    const translate = languages[lang];

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(3, translate.formErrors.nameMinLength).required(translate.formErrors.required),
            email: yup.string().email(translate.formErrors.invalidEmail).required(translate.formErrors.required),
            message: yup.string().required(translate.formErrors.messageRequired),
        }),
        onSubmit: values => {
            setFormShown(false);
        }
    });

    return (
        <div className={`${style['sec']} flex-col-center`}>
            <svg className={`${style['sec--top-wave']}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity="1" d="M0,160L30,160C60,160,120,160,180,149.3C240,139,300,117,360,133.3C420,149,480,203,540,229.3C600,256,660,256,720,218.7C780,181,840,107,900,101.3C960,96,1020,160,1080,154.7C1140,149,1200,75,1260,37.3C1320,0,1380,0,1410,0L1440,0L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
            <div className={`${style['sec--panel']} flex-row-center radius-20px`}>
                <div className={`${style['sec--panel--side']} shadow-5px white-bg radius-5px`}>
                    {[...Array(6)].map((el, i) => (<div key={i} className={`${style['sec--panel--side--dot']} black-bg radius-circular shadow-2px`}></div>))}
                </div>
                <CSSTransition in={formShown} mountOnEnter unmountOnExit timeout={1000} classNames={{ enterActive: lang === 'en' ? style['withPostMan-enter-active'] : style['withPostMan-enter-active-ar'], exitActive: lang === 'en' ? style['withPostMan-exit-active'] : style['withPostMan-exit-active-ar'] }} onExited={() => setCoverShown(true)}>
                    <div className={`${style['sec--panel--body']} shadow-5px dark-blue-bg radius-5px flex-col-left-start`}>
                        <p className="open-sans white size-26px"><i className="bi bi-chat-right-text size-28px"></i> {translate.letsKeepInTouch}</p>
                        <form onSubmit={formik.handleSubmit} className={`${style['sec--panel--body--form']} flex-col-left-start`}>
                            <input
                                id="name"
                                name="name"
                                className={`${style['sec--panel--body--form--input']} inter size-14px white margin-10px-V radius-5px shadow-5px`}
                                placeholder={translate.yourName}
                                type="text"
                                autoComplete="off"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            <p style={{ visibility: formik.errors.name ? 'visible' : 'hidden' }} className="open-sans red size-12px margin-12px-H"><i className="bi bi-exclamation-triangle-fill"></i> {formik.errors.name}</p>
                            <input
                                id="email"
                                name="email"
                                className={`${style['sec--panel--body--form--input']} inter size-14px white margin-10px-V radius-5px shadow-5px`}
                                placeholder={translate.yourEmail}
                                type="email"
                                autoComplete="off"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <p style={{ visibility: formik.errors.email ? 'visible' : 'hidden' }} className="open-sans red size-12px margin-12px-H"><i className="bi bi-exclamation-triangle-fill"></i> {formik.errors.email}</p>
                            <textarea
                                id="message"
                                name="message"
                                className={`${style['sec--panel--body--form--textarea']} inter size-14px white margin-10px-V radius-5px shadow-5px`}
                                placeholder={translate.typeYourMessageHere}
                                type="text"
                                autoComplete="off"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            ></textarea>
                            <p style={{ visibility: formik.errors.message ? 'visible' : 'hidden' }} className="open-sans red size-12px margin-12px-H"><i className="bi bi-exclamation-triangle-fill"></i> {formik.errors.message}</p>
                            <button className={`${style['sec--panel--body--form--btn']} inter dark-blue font-bold size-16px white-bg margin-10px-V radius-10px`} type="submit"><i className="bi bi-send"></i> {translate.send}</button>
                        </form>
                    </div>
                </CSSTransition>
                <CSSTransition in={coverShown} mountOnEnter unmountOnExit timeout={1000} classNames={{ enterActive: lang === 'en' ? style['withPostMan-enter-active'] : style['withPostMan-enter-active-ar'], exitActive: lang === 'en' ? style['withPostMan-exit-active'] : style['withPostMan-exit-active-ar'] }} onExited={() => setFormShown(true)}>
                    <div className={`${style['sec--panel--body']} dark-blue-bg radius-5px flex-col-center`}>
                        <p className="pt-sans white size-24px">{translate.thankYou} </p>
                        <button onClick={() => setCoverShown(false)} className={`${style['sec--panel--body--form--btn']} inter dark-blue font-bold size-16px white-bg margin-10px-V radius-10px`}><i className="bi bi-envelope"></i> {translate.newMessage}</button>
                    </div>
                </CSSTransition>
            </div >
            <svg className={style['sec--bottom-wave']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity="1" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,218.7C840,224,960,256,1080,250.7C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div >
    );
};

export default KeepInTouchForm;
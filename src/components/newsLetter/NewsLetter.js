import React from "react";

import * as yup from 'yup';
import { useFormik } from 'formik';

import { useSelector } from "react-redux";
import languages from "../../data/languages";

import style from './newsLetter.module.scss';

const NewsLetter = () => {
    const lang = useSelector(state => state.language.language);
    const translate = languages[lang];

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: yup.object({
            email: yup.string().email(translate.formErrors.invalidEmail).required(translate.formErrors.required),
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <div className={`${style['news-letter']} flex-col-center`}>
            <div className={`${style['news-letter--tag']} flex-row-center size-22px inter white green-bg shadow-5px radius-5px margin-10px-V`}>
                <i className="bi bi-newspaper margin-6px-H"></i> {translate.newsletter}
            </div>
            <p className={`${style['news-letter--text']} pt-sans light-gray size-18px margin-12px-V`}>{translate.stayAhead}</p>
            <form onSubmit={formik.handleSubmit} className={`${style['news-letter--form']} flex-col-left-start margin-12px-V`}>
                <input
                    className={`${style['news-letter--form--input']} inter light-gray shadow-5px radius-5px margin-10px-V`}
                    placeholder={translate.yourEmail}
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.email && <p className="open-sans red size-12px margin-12px-H"><i className="bi bi-exclamation-triangle-fill"></i> {formik.errors.email}</p>}
                <button className={`${style['news-letter--form--btn']} ${lang === 'ar' ? style['ar'] : ''} inter white green-bg shadow-2px radius-5px pointer`} type="submit">{translate.subscribe}</button>
            </form>
        </div>
    );
};

export default NewsLetter;
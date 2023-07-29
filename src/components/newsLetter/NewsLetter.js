import React from "react";

import * as yup from 'yup';
import { useFormik } from 'formik';

import style from './newsLetter.module.scss';

const NewsLetter = () => {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: yup.object({
            email: yup.string().email('Invalid email address').required()
        }),
        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <div className={`${style['news-letter']} flex-col-center`}>
            <div className={`${style['news-letter--tag']} flex-row-center size-22px inter white green-bg shadow-5px radius-5px margin-10px-V`}>
                <i className="bi bi-newspaper margin-6px-H"></i> Newsletter
            </div>
            <p className={`${style['news-letter--text']} pt-sans light-gray size-18px margin-12px-V`}>Stay ahead in your business by getting the best out of services! Subscribe to our insightful newsletter and join our extensive network of successful businesses leveraging the power of [AgencyName].</p>
            <form onSubmit={formik.handleSubmit} className={`${style['news-letter--form']} flex-col-left-start margin-12px-V`}>
                <input
                    className={`${style['news-letter--form--input']} inter light-gray shadow-5px radius-5px margin-10px-V`}
                    placeholder="Your email address ..."
                    id="email"
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.email && <p className="open-sans red size-12px margin-12px-H"><i className="bi bi-exclamation-triangle-fill"></i> {formik.errors.email}</p>}
                <button className={`${style['news-letter--form--btn']} inter white green-bg shadow-5px radius-5px pointer`} type="submit">Subscribe</button>
            </form>
        </div>
    );
};

export default NewsLetter;
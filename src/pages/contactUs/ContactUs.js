import React from "react";

import style from './contactUs.module.scss';

const ContactUs = () => {
    return (
        <div className={`${style['page']}`}>
            Contact Us
            {/* 
                Tow types of communications,
                First Type: send us a brief about your project,
                Second Type: setup an online meeting to disscuss your project
            */}
        </div>
    );
};

export default ContactUs;
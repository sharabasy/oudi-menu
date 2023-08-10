import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { useSelector } from "react-redux";
import languages from '../../data/languages';

import styles from './whatsAppButton.module.scss';

const WhatsAppButton = () => {
    const phoneNumber = '+201200762698';
    const message = 'Hi, I want to chat with you!';

    const lang = useSelector(state => state.language.language);
    const translate = languages[lang];

    const handleClick = () => {
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className={styles['button-container']}>
            <button className={`${styles['whatsapp-button']} flex-row-center radius-circular`} onClick={handleClick}>
                <FaWhatsapp className='size-40px' />
                <div className={`${styles['whatsapp-tag']} flex-row-center inter size-12px radius-5px shadow-5px`}>
                    {translate.chatWithUs}
                </div>
            </button>
        </div>
    );
};

export default WhatsAppButton;

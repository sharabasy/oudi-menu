import React, { useState, useEffect, useMemo } from "react";
import style from './ourPartners.module.scss';
import tag from '../../assets/images/tag.svg';
const OurPartners = () => {
    const partners = useMemo(() => [
        {
            name: 'partner1',
            logo: 'https://d1lnvqjn9z8ptc.cloudfront.net/web/0o3jjyvd8Ai4a0sm6oHPjgovwrcqlX2MGVB3K5rs.svg'
        },
        {
            name: 'partner2',
            logo: 'https://d1lnvqjn9z8ptc.cloudfront.net/web/8ft2pEH4MFXqP6UZFUPvXB4lS1n7an8fmVnRF9w4.svg'
        },
        {
            name: 'partner3',
            logo: 'https://d1lnvqjn9z8ptc.cloudfront.net/web/WCPmRJEWsa2FTRgQqoXRlbhrr35DvOemSLsHvFHJ.svg'
        },
        {
            name: 'partner4',
            logo: 'https://d1lnvqjn9z8ptc.cloudfront.net/web/aWoQAQplOr2HGK8xAOkZpnrf5Xl92N0q5yWmDCKe.svg'
        },
        {
            name: 'partner5',
            logo: 'https://d1lnvqjn9z8ptc.cloudfront.net/web/U9v3Eo0sIpcSPWERl0vSGymjDkzdfO2pDWhpMWYK.svg'
        },
        {
            name: 'partner6',
            logo: 'https://d1lnvqjn9z8ptc.cloudfront.net/web/HYcVXfZbGraOXSBqvmWWrjbsgwpa9PdOhUU4UBwJ.svg'
        },
        {
            name: 'partner7',
            logo: 'https://d1lnvqjn9z8ptc.cloudfront.net/web/zpIQKMNyPPM6FCcU8RSrq5WUn7DXh22X8Bqi9Kmv.svg'
        },
    ], []);

    const [showPartners, setShowPartners] = useState(false);

    useEffect(() => {
        // Set a delay before showing the partner logos one by one
        const showDelay = 300; // milliseconds
        const timer = setInterval(() => {
            setShowPartners(prevState => {
                const nextIndex = (prevState === false ? 0 : prevState + 1);
                if (nextIndex === partners.length) {
                    clearInterval(timer); // Stop the timer when all logos are shown
                }
                return nextIndex;
            });
        }, showDelay);

        return () => clearInterval(timer); // Clean up the timer when the component unmounts
    }, [partners]);

    return (
        <div className={`full-width ${style['our-partners']}`}>
            <div className={`full-width flex-row-center ${style['our-partners--header']}`}>
                <div className={`inter size-32px ${style['our-partners--header--title']}`}>
                    Our Partners
                </div>
                <img src={tag} alt="background of header" />
            </div>
            <div className={`inter size-14px flex-row-center gray ${style['our-partners--header--sub-title']}`}>Stories that started with trust given to us by our customers and continued thanks to our belief in them.</div>
            <div className="full-width flex-row-center flex-wrap">
                {partners.slice(0, showPartners).map((partner, index) => (
                    <div key={index} className={`${style['our-partners--slot']}`}>
                        <img src={partner.logo} className="shadow-2px radius-10px" alt={partner.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPartners;
import App from '../App';

import Home from '../pages/home/Home';
import WhoAreWe from '../pages/whoAreWe/WhoAreWe';
import OurServices from '../pages/ourServices/OurServices';
import OurPortfolio from '../pages/ourPortfolio/OurPortfolio';
import ContactUs from '../pages/contactUs/ContactUs';

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'who-are-we',
                element: <WhoAreWe />
            },
            {
                path: 'our-services',
                element: <OurServices />
            },
            {
                path: 'our-portfolio',
                element: <OurPortfolio />
            },
            {
                path: 'contact-us',
                element: <ContactUs />
            }
        ]
    },
];

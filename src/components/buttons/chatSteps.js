import Footer from '../footer/Footer';

const steps = [
    {
        id: '1',
        message: 'Hey there! 👋 Welcome to [Your Agency Name]\'s virtual assistant! I\'m here to assist you with all your web and mobile development needs. What can I call you?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: 'Great to meet you, {previousValue}! 🌟 How can our team of developers help bring your ideas to life?',
        trigger: 'services',
    },
    {
        id: 'services',
        options: [
            { value: 'web', label: 'Web Development', trigger: 'webDev' },
            { value: 'mobile', label: 'Mobile Development', trigger: 'mobileDev' },
            { value: 'both', label: 'Both Web and Mobile', trigger: 'bothDev' },
        ],
    },
    {
        id: 'webDev',
        message: 'Our web development team crafts modern and responsive websites that stand out. How about we turn your vision into a stunning online presence? 💻',
        trigger: 'projectInquiry',
    },
    {
        id: 'mobileDev',
        message: 'Flutter is our specialty for mobile app development! Imagine having a beautiful and functional app on both Android and iOS. Ready to discuss your app idea? 📱',
        trigger: 'projectInquiry',
    },
    {
        id: 'bothDev',
        message: 'The best of both worlds! We can build you a seamless experience across web and mobile platforms. Tell me more about your project, and let\'s make it happen! 🌐📱',
        trigger: 'projectInquiry',
    },
    {
        id: 'projectInquiry',
        message: 'We\'re excited to learn more about your project! What are your goals and expectations? Feel free to share your thoughts. 👀',
        trigger: 'userInput',
    },
    {
        id: 'userInput',
        user: true,
        trigger: 'customResponse',
    },
    {
        id: 'customResponse',
        component: <Footer />,  // You can create a React component to handle custom responses here
        trigger: 'contactUs',
    },
    {
        id: 'contactUs',
        message: 'Thanks for sharing your ideas with us! 🚀 Ready to take the next step? Our team is here to turn your vision into reality. Feel free to reach out to us anytime!',
        end: true,
    },
];

export default steps;
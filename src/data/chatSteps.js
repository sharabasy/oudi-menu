import Footer from '../components/footer/Footer';

const steps = {
    en: [
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
    ],
    ar: [
        {
            id: '1',
            message: 'مرحباً! 👋 أهلاً بك في مساعد [اسم الوكالة] الافتراضي! أنا هنا لمساعدتك في جميع احتياجات تطوير الويب والهاتف المحمول. ماذا يمكنني أن أسميك؟',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: 'سعدت بلقائك، {previousValue}! 🌟 كيف يمكن لفريقنا من المطورين مساعدتك في تحويل أفكارك إلى حياة؟',
            trigger: 'services',
        },
        {
            id: 'services',
            options: [
                { value: 'web', label: 'تطوير الويب', trigger: 'webDev' },
                { value: 'mobile', label: 'تطوير الهاتف المحمول', trigger: 'mobileDev' },
                { value: 'both', label: 'كل من الويب والهاتف المحمول', trigger: 'bothDev' },
            ],
        },
        {
            id: 'webDev',
            message: 'يقوم فريقنا لتطوير الويب بصنع مواقع ويب حديثة ومتجاوبة تبرز. ماذا عن تحويل رؤيتك إلى وجود عبر الإنترنت مذهل؟ 💻',
            trigger: 'projectInquiry',
        },
        {
            id: 'mobileDev',
            message: 'Flutter هو تخصصنا لتطوير تطبيقات الهاتف المحمول! تخيل أن تكون لديك تطبيق جميل ووظيفي على كل من Android و iOS. هل أنت مستعد لمناقشة فكرة تطبيقك؟ 📱',
            trigger: 'projectInquiry',
        },
        {
            id: 'bothDev',
            message: 'أفضل كلا العالمين! يمكننا بناء تجربة سلسة لك عبر منصات الويب والهاتف المحمول. أخبرني المزيد عن مشروعك، ودعنا نجعلها حدثًا! 🌐📱',
            trigger: 'projectInquiry',
        },
        {
            id: 'projectInquiry',
            message: 'نحن متحمسون لمعرفة المزيد عن مشروعك! ما هي أهدافك وتوقعاتك؟ لا تتردد في مشاركة أفكارك. 👀',
            trigger: 'userInput',
        },
        {
            id: 'userInput',
            user: true,
            trigger: 'customResponse',
        },
        {
            id: 'customResponse',
            component: <Footer />,  // يمكنك إنشاء عنصر React للتعامل مع الردود المخصصة هنا
            trigger: 'contactUs',
        },
        {
            id: 'contactUs',
            message: 'شكراً لمشاركة أفكارك معنا! 🚀 هل أنت مستعد لاتخاذ الخطوة التالية؟ فريقنا هنا لتحويل رؤيتك إلى حقيقة. لا تتردد في التواصل معنا في أي وقت!',
            end: true,
        },
    ],
};

export default steps;
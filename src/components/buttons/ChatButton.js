import React, { useState } from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import style from './chatButton.module.scss';

const steps = [
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
    },
    {
        id: '2',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
    },
];

// Creating our own theme
const theme = {
    background: '#ffffff',
    headerBgColor: '#3cb4e5',
    headerFontSize: '20px',
    botBubbleColor: '#3cb4e5',
    headerFontColor: '#ffffff',
    botFontColor: '#ffffff',
    userBubbleColor: '#ffffff',
    userFontColor: '#3cb4e5',
};

const ChatButton = () => {
    const [chatShown, setChatShown] = useState(false);

    const toggleChat = () => {
        setChatShown(!chatShown);
    }

    return (
        <div className={`${style['chat']} flex-col-left-start`}>
            <div className={`${chatShown ? 'gray-bg' : 'baby-blue-bg'} ${style['chat--btn']} flex-row-center pointer radius-circular shadow-5px`} onClick={toggleChat}>
                <i className={`${chatShown ? 'bi bi-x size-36px' : 'bi bi-chat-fill size-32px'} white`} />
                <div className={`${style['chat--btn--tag']} flex-row-center white inter size-12px radius-5px shadow-5px`}>
                    {chatShown ? 'Close' : 'Chat'}
                </div>
            </div>
            <ThemeProvider theme={theme}>
                <ChatBot
                    className={`${style['icon']} open-sans`}
                    style={{ left: '70px', bottom: '70px', transformOrigin: 'bottom left' }}
                    floating={true}
                    headerTitle="Chat"
                    enableSmoothScroll
                    enableMobileAutoFocus
                    steps={steps}
                    opened={chatShown}
                    floatingIcon={null}
                    toggleFloating={toggleChat}
                    hideBotAvatar
                    hideUserAvatar
                />
            </ThemeProvider>
        </div>
    );
};

export default ChatButton;
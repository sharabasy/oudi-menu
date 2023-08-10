import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import WhatsAppButton from "./components/buttons/WhatsAppButton";
import KeepInTouchForm from "./components/keepInTouchForm/KeepInTouchForm";
import Footer from './components/footer/Footer';

import ChatButton from "./components/buttons/ChatButton";
import { useSelector } from "react-redux";

import style from './app.module.scss';

const App = () => {
  const language = useSelector(state => state.language.language);

  useEffect(() => {
    document.documentElement.lang = language;
    const htmlElement = document.documentElement;
    if (language === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
    }
  }, [language]);

  return (
    <div className={`${style['App']} white-bg`}>
      <Navbar />
      <WhatsAppButton />
      <ChatButton />

      <Outlet />
      <KeepInTouchForm />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import WhatsAppButton from "./components/buttons/WhatsAppButton";
import KeepInTouchForm from "./components/keepInTouchForm/KeepInTouchForm";
import Footer from './components/footer/Footer';

import style from './app.module.scss';

function App() {
  return (
    <div className={`${style['App']} white-bg`}>
      <Navbar />
      <Outlet />
      <WhatsAppButton />
      {/* Chat Button */}
      <KeepInTouchForm />
      <Footer />
    </div>
  );
}

export default App;

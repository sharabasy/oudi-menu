import React from "react";

import { Outlet } from "react-router-dom";

import WhatsAppButton from "./components/buttons/WhatsAppButton";
import Footer from './components/footer/Footer';

import style from './app.module.scss';

function App() {
  return (
    <div className={`${style['App']} white-bg`}>
      {/* Navbar */}
      <Outlet />
      <WhatsAppButton />
      {/* Chat Button */}
      {/* Keep in touch form */}
      <Footer />
    </div>
  );
}

export default App;

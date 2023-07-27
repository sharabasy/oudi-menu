import React from "react";

import { Outlet } from "react-router-dom";

import style from './app.module.scss';

function App() {
  return (
    <div className={`${style['App']} white-bg`}>
      {/* Navbar */}
      <Outlet />
      {/* What'sApp Button */}
      {/* Chat Button */}
      {/* Keep in touch form */}
      {/* footer */}
    </div>
  );
}

export default App;

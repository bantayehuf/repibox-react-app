/**
 * The application Home page
 * @author Bantayehu F<bantayehuf@gmail.com>
 */

import React from "react";

import AppHeader from "../containers/AppHeader";
import AppBody from "../containers/AppBody";
import AppFooter from "../containers/AppFooter";

function HomePage() {
  return (
    <div className="main">
      <AppHeader />
      <AppBody />
      <AppFooter />
    </div>
  );
}

export default HomePage;

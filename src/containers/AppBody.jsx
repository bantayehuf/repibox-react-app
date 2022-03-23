/**
 * The application body
 * @author Bantayehu F<bantayehuf@gmail.com>
 */

import React from "react";
import Items from "../components/Items";

export default function AppBody() {
  return (
    <div className="app-body md:mx-8">
      <h3 className="flex justify-content-center text-black-alpha-70 mb-2">Recently added recipes</h3>
      <Items />
    </div>
  );
}

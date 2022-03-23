/**
 * The application header
 * @author Bantayehu F<bantayehuf@gmail.com>
 */

import React from "react";
import { InputText } from 'primereact/inputtext';


export default function AppHeader() {
  return (
    <div className="app-header grid bg-gray-100 md:pt-2 md:pl-8">
      <div className="col-12 md:col-7 pb-0 md:p-1">
        <div className="flex justify-content-center md:justify-content-start ">
          <img className="w-2rem h-2rem mt-2" src="./logo192.png" alt="" />
          <h3 className="mb-0 ml-2">Repibox receipe</h3>
        </div>
      </div>
      <div className="col-12 md:col-4">
        <InputText type="search" className="p-inputtext-sm w-full md:mt-1" placeholder="Search.."/>
      </div>
    </div>
  );
}

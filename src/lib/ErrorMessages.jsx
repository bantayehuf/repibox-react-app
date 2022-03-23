import React from "react";

export const ErrorMessages = ({ message }) => {
  return (
    <div className="w-100 flex justify-content-center pt-5">
      <h4 className="text-black-alpha-70">
        <div class="flex">
          <i className="flex-initial  pi pi-info-circle"></i>
          <span className="flex-initial pl-1">{message}</span>
        </div>
      </h4>
    </div>
  );
};

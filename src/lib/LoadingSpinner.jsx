/** @jsxImportSource @emotion/react */
import LoadBar from "react-spinners/PropagateLoader";

export const ItemLoadingSpinner = ({ className }) => {
  return (
    <div className="w-full flex justify-content-center">
      <div className={className}>
        <LoadBar color="#3172BE" size={10} />
      </div>
    </div>
  );
};

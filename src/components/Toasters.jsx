import React from "react";
import Toaster from "./Toaster";

const Toasters = ({ toastersList = [], position, setToaster }) => {
  return (
    <div className={`toaster-container ${position}`}>
      {toastersList.map((toaster) => (
        <Toaster key={toaster.id} {...toaster} setToaster={setToaster} />
      ))}
    </div>
  );
};

export default Toasters;

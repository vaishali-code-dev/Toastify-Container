import React, { useState, useCallback, useRef } from "react";
import Toasters from "../components/Toasters";
import { POSITIONS } from "../constants";

const useToaster = (position = POSITIONS.bottomRight) => {
  const [toaster, setToaster] = useState([]);
  let timerRef = useRef({});
  let counterId = useRef(0);

  const triggerToaster = useCallback((toasterProps) => {
    counterId.current += 1;

    let customToasterProps = {
      ...toasterProps,
      id: counterId.current,
    };

    clearTimeout(timerRef.current[counterId.current]);
    setToaster((prevToaster) => [...prevToaster, customToasterProps]);
    let timerId = counterId.current;

    timerRef.current[counterId.current] = setTimeout(() => {
      setToaster((prevToaster) => {
        let idx = prevToaster.findIndex((item) => item.id === timerId);
        if (idx !== -1) {
          let updatedToasters = [...prevToaster];
          updatedToasters.splice(idx, 1);
          return updatedToasters;
        }
        return prevToaster;
      });
    }, toasterProps.duration ?? 3000);
  }, []);

  const removeToaster = (id) => {
    setToaster((prevToaster) => {
      let idx = prevToaster.findIndex((item) => item.id === id);
      if (idx !== -1) {
        let updatedToasters = [...prevToaster];
        updatedToasters.splice(idx, 1);
        return updatedToasters;
      }
      return prevToaster;
    });
  };

  const toasterComponent = toaster.length ? (
    <Toasters toastersList={toaster} position={position} setToaster={removeToaster} />
  ) : null;

  return { toasterComponent, triggerToaster };
};

export default useToaster;

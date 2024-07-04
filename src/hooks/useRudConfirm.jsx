import React, { createContext, useContext, useState, useRef } from "react";
import { RudConfirmModal } from "../shared_components/RudConfirm";

const ConfirmContext = createContext();

export const useConfirm = () => {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error("useConfirm must be used within an ConfirmProvider");
  }
  return context;
};

export const ConfirmProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [iconSrc, setIconSrc] = useState();
  const resolveRef = useRef();

  const showConfirm = (newMessage, iconSrc = undefined) => {
    setMessage(newMessage);
    setIconSrc(iconSrc);
    setOpen(true);
    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  };

  const closeHandler = () => {
    setOpen(false);
    if (resolveRef.current) {
      resolveRef.current(false);
      resolveRef.current = null;
    }
  };

  const confirmHandler = () => {
    setOpen(false);
    if (resolveRef.current) {
      resolveRef.current(true);
      resolveRef.current = null;
    }
  };

  return (
    <ConfirmContext.Provider value={showConfirm}>
      {children}
      <RudConfirmModal
        open={open}
        onClose={closeHandler}
        onConfirm={confirmHandler}
        message={message}
        iconSrc={iconSrc}
      />
    </ConfirmContext.Provider>
  );
};

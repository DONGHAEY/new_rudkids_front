import React, { createContext, useContext, useState, useRef } from "react";
import { RudAlertModal } from "../shared_components/RudAlert";

const AlertContext = createContext();

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

export const AlertProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const resolveRef = useRef();

  const showAlert = (newMessage) => {
    setMessage(newMessage);
    setOpen(true);
    return new Promise((resolve) => {
      resolveRef.current = resolve;
    });
  };

  const hideAlert = () => {
    setOpen(false);
    if (resolveRef.current) {
      resolveRef.current();
      resolveRef.current = null;
    }
  };

  return (
    <AlertContext.Provider value={showAlert}>
      {children}
      <RudAlertModal open={open} onClose={hideAlert}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingBlock: "10%",
            paddingInline: "7%",
            textAlign: "center",
            fontFamily: "Pretendard-Bold",
            fontSize: "clamp(0rem, 5vw, 1.2rem)",
          }}
        >
          <p>{message}</p>
        </div>
      </RudAlertModal>
    </AlertContext.Provider>
  );
};

import React, { useEffect, useState } from "react";
// import "./styles.css";
import { useUserMedia } from "../../hooks/useUserMedia";

export const Grant = () => {
  const permissionList = [
    {
      name: "video",
      content: "for ~~~~",
    },
  ];
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!permissionList.length) return;
    if (permissionList.length == step) {
      return;
    }
    (async () => {
      try {
        await window.navigator.mediaDevices.getUserMedia({
          [permissionList[step].name]: true,
        });
        setStep(step + 1);
      } catch (e) {}
    })();
  }, [permissionList, step]);
  // useEffect(() => {
  //   const audio = new Audio("/audio/test.mp3");
  //   audio.play();
  //   audio.play();
  //   audio.play();
  //   audio.play();
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        width: "100%",
        height: "100%",
      }}
    >
      <p>rudkids Permissions</p>
      {permissionList?.map((permission, idx) => {
        return (
          <div key={permission.name}>
            {permission.name} {idx < step ? "허용됨" : "허용안됨"}
          </div>
        );
      })}
      {permissionList.length === step && (
        <button
          onClick={() => {
            window.location.href = "/";
          }}
        >
          다음
        </button>
      )}
    </div>
  );
};

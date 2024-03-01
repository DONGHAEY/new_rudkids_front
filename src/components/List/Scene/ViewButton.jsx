import { Html } from "@react-three/drei";
import { useRef } from "react";

const ViewButtonStyle = {
  position: "fixed",
  height: "100vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const ViewButtonDivStyle = {
  position: "absolute",
  bottom: "0",
  backgroundColor: "blue",
  padding: 15,
  textAlign: "center",
  marginBottom: "30px",
  borderRadius: "10px",
  color: "white",
  width: "50%",
  opacity: 1,
};

export const ViewButton = ({ productId }) => {
  const divEl = useRef(null);

  if (!productId) return null;

  return (
    <Html fullscreen style={ViewButtonStyle}>
      <div
        ref={divEl}
        onClick={() => {
          // productId의 디테일 페이지로 이동;
          alert(productId);
        }}
        style={ViewButtonDivStyle}
      >
        Watch
      </div>
    </Html>
  );
};

import { Html } from "@react-three/drei";
import { useRef } from "react";

const ViewButtonStyle = {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const ViewButtonDivStyle = {
  position: "absolute",
  backgroundColor: "blue",
  padding: 15,
  textAlign: "center",
  borderRadius: "10px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  bottom: 0,
  marginBottom: 30,
  width: "80%",
};

export const ViewButton = ({ productId }) => {
  if (!productId) return null;

  return (
    <Html fullscreen style={ViewButtonStyle}>
      <div
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

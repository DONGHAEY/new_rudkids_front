import { Html } from "@react-three/drei";

export const ViewButton = ({ productId }) => {
  return (
    <Html
      fullscreen
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        onClick={() => {
          // productId의 디테일 페이지로 이동;
          alert(productId);
        }}
        style={{
          position: "absolute",
          bottom: "0",
          backgroundColor: "blue",
          padding: 15,
          textAlign: "center",
          marginBottom: "30px",
          borderRadius: "10px",
          color: "white",
          width: "50%",
        }}
      >
        Watch
      </div>
    </Html>
  );
};

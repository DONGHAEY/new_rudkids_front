import styled from "styled-components";
import image1Src from "./assets/1.png";

const Page4 = ({ isRender }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        backgroundColor: "#D9D9D9",
      }}
    >
      <img
        src={image1Src}
        style={{
          width: "100%",
        }}
      />
    </div>
  );
};

export default Page4;

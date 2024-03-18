import styled from "styled-components";

export const Page0 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          backgroundColor: "green",
          position: "absolute",
          zIndex: -30,
        }}
      >
        앞으로 더 재미있는것을 구현할것입니까?
      </p>
    </div>
  );
};

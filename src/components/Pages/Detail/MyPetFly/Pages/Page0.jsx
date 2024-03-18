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
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "burlywood",
          zIndex: -2,
        }}
      />
      <div
        style={{
          position: "absolute",
          zIndex: -1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          height: "80%",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          ????
          <br />
          WTF
        </p>
        <p
          style={{
            fontSize: "26px",
            textAlign: "center",
          }}
        >
          It's Not Just
          <br />
          Kidding
        </p>
      </div>
    </div>
  );
};

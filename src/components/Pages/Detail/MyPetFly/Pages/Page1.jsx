import styled from "styled-components";

export const Page1 = () => {
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
          textAlign: "center",
          padding: "10px",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            color: "white",
            position: "absolute",
            zIndex: 30,
            fontWeight: "bold",
            "-webkit-text-stroke-width": "0.3px",
            "-webkit-text-stroke-color": "black",
          }}
        >
          Serously Aren't You
        </p>
        <p
          style={{
            position: "absolute",
            zIndex: -29,
            color: "white",
            fontSize: "20px",
            marginTop: "100px",
            fontWeight: "bold",
            "-webkit-text-stroke-width": "0.3px",
            "-webkit-text-stroke-color": "black",
          }}
        >
          Wasting Your Life In ??
        </p>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: -30,
          position: "absolute",
        }}
      >
        <img
          style={{
            height: "100%",
            objectFit: "cover",
          }}
          src="https://imageio.forbes.com/blogs-images/ofx/files/2018/09/OFX3-iStock-492595743-1200x800.jpg?height=474&width=711&fit=bounds"
        />
      </div>
    </div>
  );
};

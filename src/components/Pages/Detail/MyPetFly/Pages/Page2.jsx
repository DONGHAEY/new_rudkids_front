import styled from "styled-components";

export const Page2 = ({ isRender }) => {
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
          backgroundColor: "white",
          color: "black",
          fontWeight: "bold",
          position: "absolute",
          padding: "10px",
          zIndex: -30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p>And It's Not Just Bag, It's</p>
        <img
          width="100%"
          src="https://blog.kakaocdn.net/dn/bL9giw/btqEanjaPyd/wDb67jNOJq4MRNMOKRK3Sk/img.png"
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          zIndex: -31,
        }}
      >
        <img
          style={{
            height: "100%",
          }}
          src="https://i.namu.wiki/i/X75hqoeUXwPiRf3bnKvEbR8HAw8vnctMsgJl6Z5laVjqQYWCcsfoH0PPmMWkNRp0OToiAZmNhRr3IiClZOIayw.webp"
        />
      </div>
    </div>
  );
};

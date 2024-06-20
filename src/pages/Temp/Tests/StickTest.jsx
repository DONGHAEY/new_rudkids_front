import React from "react";

function StickTest() {
  return (
    <div style={containerStyle}>
      <h1>Product Title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div style={spacerStyle}></div>
      <button style={buyButtonStyle}>Buy Now</button>
      <div style={contentStyle}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

const containerStyle = {
  height: "2000px",
  padding: "10px",
  // width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const spacerStyle = {
  height: "1000px", // This creates space so the button starts at the bottom
};

const buyButtonStyle = {
  backgroundColor: "#28a745",
  color: "#fff",
  fontSize: "100%",
  padding: "20px 20px",
  width: "90%",
  border: "none",
  cursor: "pointer",
  position: "sticky",
  bottom: "20px", // Initially stick to the bottom
  top: "10px", // When scrolled up, it will stick 60px below the top
  zIndex: 1000,
};

const contentStyle = {
  padding: "20px",
};

export default StickTest;

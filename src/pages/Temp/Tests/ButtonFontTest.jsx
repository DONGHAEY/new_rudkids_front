import React from "react";

function App() {
  return (
    <div style={containerStyle}>
      <button style={buttonStyle}>Buy Now</button>
    </div>
  );
}

const containerStyle = {
  height: "100%",
  //   width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
};

const buttonStyle = {
  backgroundColor: "#28a745",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  width: "100%",
  fontSize: "5vw",
  height: "50px",
};

export default App;
// ???/ 상대적속성을 어케 적용하까

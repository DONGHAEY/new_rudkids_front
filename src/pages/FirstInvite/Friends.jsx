import asset1Src from "./assets/f1.svg";
import asset2Src from "./assets/f2.svg";
import asset3Src from "./assets/f3.svg";

const Friends = () => {
  return (
    <>
      <img
        style={{
          position: "absolute",
          top: "80px",
          left: 0,
          zIndex: -1,
        }}
        width="60px"
        src={asset1Src}
      />
      <img
        style={{
          position: "absolute",
          top: "50px",
          right: 0,
          zIndex: -1,
        }}
        width="60px"
        src={asset2Src}
      />
      <img
        style={{
          position: "absolute",
          top: "170px",
          right: 0,
          zIndex: -1,
        }}
        width="50px"
        src={asset3Src}
      />
    </>
  );
};

export default Friends;

const FastStartSign = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "130%",
        backgroundColor: "rgba(255, 78, 0, 1)",
        paddingBlock: "3%",
        paddingInline: "5%",
        color: "white",
        fontSize: "clamp(0rem, 2.8vw, 0.7rem)",
        fontFamily: "Pretendard-Medium",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30%",
          borderLeft: "clamp(0rem, 2vw, 1rem) solid transparent",
          borderRight: "clamp(0rem, 2vw, 1rem) solid transparent",
          borderBottom: "clamp(0rem, 2vw, 1rem) solid rgba(255, 78, 0, 1)",
        }}
      />
      3초만에 시작하기
    </div>
  );
};

export default FastStartSign;

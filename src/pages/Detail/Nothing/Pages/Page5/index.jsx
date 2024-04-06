const Page5 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          bottom: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "40%",
            border: "none",
            paddingInline: "40px",
            paddingBlock: "10px",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Page5;

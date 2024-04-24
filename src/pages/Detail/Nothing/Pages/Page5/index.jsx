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
          overflow: "scroll",
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
        {/* <div
          style={{
            // top: 0,
            zIndex: 1000,
            overflow: "scroll",
            width: "70px",
            backgroundColor: "black",
            color: "white",
            height: "100px",
          }}
        >
          <p>asdfasdfasdfasdfasdfadsasdfasdffjadskfjkdjfk</p>
        </div> */}
      </div>
    </div>
  );
};

export default Page5;

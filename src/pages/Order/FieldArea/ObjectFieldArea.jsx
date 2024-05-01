const ObjectFieldArea = ({ label, children }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "solid 1px black",
          padding: "10px",
        }}
      >
        <label
          style={{
            fontSize: "16px",
          }}
        >
          {label}
        </label>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default ObjectFieldArea;

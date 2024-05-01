const FieldArea = ({ label, errorMessage, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <label
        style={{
          fontSize: "12px",
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
        {errorMessage && (
          <p style={{ fontSize: "11px", color: "red" }}>*{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default FieldArea;

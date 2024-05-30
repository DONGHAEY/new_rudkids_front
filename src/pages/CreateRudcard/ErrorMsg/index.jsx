const ErrorMsg = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "right",
        color: "red",
        fontSize: "12px",
        fontFamily: "Pretendard-Medium",
      }}
    >
      {children}
    </div>
  );
};

export default ErrorMsg;

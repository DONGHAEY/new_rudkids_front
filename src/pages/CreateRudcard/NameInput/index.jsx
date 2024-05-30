import { InputUI, NameInputNmTxtUI, NameInputUI } from "./styles";
import cancelIconSrc from "./assets/cancel.svg";
import ErrorMsg from "../ErrorMsg";

const NameInput = ({ field, fieldState, formState }) => {
  return (
    <>
      <NameInputUI>
        <NameInputNmTxtUI>이름</NameInputNmTxtUI>
        <InputUI placeholder="이름을 입력하세요" {...field} />
        <img
          onClick={() => {}}
          style={{
            position: "absolute",
            right: "16px",
          }}
          src={cancelIconSrc}
        />
      </NameInputUI>
      <ErrorMsg>{fieldState.error && fieldState?.error?.message}</ErrorMsg>
    </>
  );
};

export default NameInput;

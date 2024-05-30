import { InputUI, NameInputNmTxtUI, NameInputUI } from "./styles";
import cancelIconSrc from "./assets/cancel.svg";

const NameInput = ({ register }) => {
  return (
    <NameInputUI>
      <NameInputNmTxtUI>이름</NameInputNmTxtUI>
      <InputUI
        placeholder="이름을 입력하세요"
        {...register("name", {
          required: true,
          minLength: 2,
        })}
      />
      <img
        style={{
          position: "absolute",
          right: "40px",
        }}
        src={cancelIconSrc}
      />
    </NameInputUI>
  );
};

export default NameInput;

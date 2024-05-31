import { InputUI, NameInputNmTxtUI, NameInputUI } from "./styles";
import cancelIconSrc from "./assets/cancel.svg";
import ErrorMsg from "../ErrorMsg";
import { useEffect, useState } from "react";

const NameInput = ({ field, fieldState }) => {
  const maxLength = 16;
  const regex = /^[A-Za-z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|-]+$/;

  const [name, setName] = useState("");
  useEffect(() => {
    field?.onChange(name);
  }, [name]);

  return (
    <>
      <NameInputUI>
        <NameInputNmTxtUI>이름</NameInputNmTxtUI>
        <InputUI
          placeholder="이름을 입력하세요"
          ref={field.ref}
          value={name}
          onChange={(e) => {
            if (e.target.value === "" || regex.test(e.target.value)) {
              if (e.target.value.length < maxLength) {
                setName(e.target.value);
              } else {
                alert(maxLength + "글자 이내로 작성해주세요");
              }
            } else {
              alert("영어로 작성해주세요");
            }
          }}
        />
        <img
          onClick={() => {
            setName("");
          }}
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

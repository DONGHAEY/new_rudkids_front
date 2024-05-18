import { useEffect, useState } from "react";
import {
  LengthTxtUI,
  PlaceHolderUI,
  SaveBtnUI,
  TextAreaUI,
  TextAreaWrapperUI,
} from "./styles";
import { useEditMyDescriptionMutation } from "../../../queries/profile";

const Message = ({ value = "", maxLength = 100 }) => {
  const [text, setText] = useState("");
  const editMyDescriptionMutation = useEditMyDescriptionMutation();

  const changeHandler = async (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setText(value);
  }, [value]);

  const canSave = text !== value;

  const onSave = async () => {
    await editMyDescriptionMutation.mutateAsync(text);
  };

  return (
    <TextAreaWrapperUI>
      <TextAreaUI
        value={text}
        maxLength={maxLength}
        onChange={changeHandler}
        type="text"
      />
      {canSave && <SaveBtnUI onClick={onSave}>저장</SaveBtnUI>}
      {value?.length === 0 && (
        <PlaceHolderUI>당신이 왜 루키즈인지 알려주세요!</PlaceHolderUI>
      )}
      <LengthTxtUI>
        {value?.length}/{maxLength}
      </LengthTxtUI>
    </TextAreaWrapperUI>
  );
};

export default Message;

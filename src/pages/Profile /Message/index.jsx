import { useRef, useState } from "react";
import {
  LengthTxtUI,
  PlaceHolderUI,
  TextAreaUI,
  TextAreaWrapperUI,
} from "./styles";

const Message = ({ maxLength = 100 }) => {
  const [message, setMessage] = useState("");

  return (
    <TextAreaWrapperUI>
      <TextAreaUI
        maxLength={maxLength}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        type="text"
      />
      {message?.length === 0 && (
        <PlaceHolderUI>당신이 왜 루키즈인지 알려주세요!</PlaceHolderUI>
      )}
      <LengthTxtUI>
        {message.length}/{maxLength}
      </LengthTxtUI>
    </TextAreaWrapperUI>
  );
};

export default Message;

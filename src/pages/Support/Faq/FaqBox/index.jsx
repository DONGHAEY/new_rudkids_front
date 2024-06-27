import { useState } from "react";
import { FaqBoxUI, AskSectionUI, AnswerSectionUI } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const FaqBox = ({ ask, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FaqBoxUI>
      <AskSectionUI onClick={() => setIsOpen(!isOpen)}>
        <p>{ask}</p>
        <Icon icon={isOpen ? "teenyicons:up-solid" : "teenyicons:down-solid"} />
      </AskSectionUI>
      {isOpen && <AnswerSectionUI>{answer}</AnswerSectionUI>}
    </FaqBoxUI>
  );
};

export default FaqBox;

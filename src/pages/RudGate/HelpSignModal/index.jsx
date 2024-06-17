import RudAlert from "../../../shared_components/RudAlert";
import { HelpSignModalUI, RudAlertContentsUI } from "./styles";
import { useState } from "react";
import helpSignSrc from "./assets/help_sign.png";

const HelpSignModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <HelpSignModalUI open={isOpen} onClose={() => setIsOpen(false)}>
      <RudAlert onClose={() => setIsOpen(false)}>
        <RudAlertContentsUI onClick={() => setIsOpen(false)}>
          <img src={helpSignSrc} width="80%" />
        </RudAlertContentsUI>
      </RudAlert>
    </HelpSignModalUI>
  );
};

export default HelpSignModal;

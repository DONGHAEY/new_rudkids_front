import { IoMdArrowBack } from "react-icons/io";
import { Center, PopupHeaderUI, PopupUI, TitleUI } from "./styles";

const Popup = ({ children, isOpen = false, setIsOpen, popupName = "" }) => {
  const backIconClickHandler = () => {
    if (typeof setIsOpen === "function") {
      setIsOpen();
    }
  };

  return (
    <PopupUI open={isOpen}>
      <Center>
        <PopupHeaderUI>
          <IoMdArrowBack onClick={backIconClickHandler} />
          <TitleUI>{popupName ?? ""}</TitleUI>
          <div />
        </PopupHeaderUI>
        {children}
      </Center>
    </PopupUI>
  );
};

export default Popup;

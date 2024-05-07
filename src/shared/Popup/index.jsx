import { IoMdArrowBack } from "react-icons/io";
import { Center, PopupHeaderUI, PopupUI, TitleUI } from "./styles";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import qs from "qs";

const Popup = ({ children, popupName = "" }) => {
  const navigate = useNavigate();

  const backIconClickHandler = () => {
    navigate(-1);
  };

  const isOpen = useMemo(() => {
    const query = qs.parse(window.location.search.replace("?", ""));
    if (query?.popup) {
      return query?.popup?.includes(popupName);
    }
    return false;
  }, [window.location.search]);

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

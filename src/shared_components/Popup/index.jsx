import { IoMdArrowBack } from "react-icons/io";
import { Center, PopupHeaderUI, PopupUI, TitleUI } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { memo, useMemo, useRef, useState } from "react";
import qs from "qs";

export const Content = ({ children, popupTitle = "", showHeader }) => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const backIconClickHandler = () => {
    navigate(-1);
  };

  return (
    <Center ref={contentRef}>
      {showHeader && (
        <PopupHeaderUI>
          <IoMdArrowBack onClick={backIconClickHandler} />
          <TitleUI>{popupTitle}</TitleUI>
          <div />
        </PopupHeaderUI>
      )}
      {children}
    </Center>
  );
};

const Popup = ({
  children,
  popupName = "",
  popupTitle = "",
  showHeader = true,
}) => {
  const location = useLocation();
  const search = location.search;

  const isOpen = useMemo(() => {
    const query = qs.parse(search.replace("?", ""));
    if (query.popup) {
      const findPopupName = query.popup.find(
        (popupName_) => popupName_ === popupName
      );
      return findPopupName ? true : false;
    }
    return false;
  }, [search]);

  return (
    <PopupUI open={isOpen} hideBackdrop={true} disableAutoFocus={true}>
      <Content popupTitle={popupTitle} showHeader={showHeader}>
        {children}
      </Content>
    </PopupUI>
  );
};

export default memo(Popup);

import { IoMdArrowBack } from "react-icons/io";
import { Center, PopupHeaderUI, PopupUI, TitleUI } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import qs from "qs";
import gsap from "gsap";

const Popup = ({ children, popupName = "" }) => {
  //
  const location = useLocation();
  const search = location.search;

  const isOpen = useMemo(() => {
    const query = qs.parse(search.replace("?", ""));
    let value = false;
    if (query.popup) {
      const findPopupName = query.popup.find(
        (popupName_) => popupName_ === popupName
      );
      value = findPopupName ? true : false;
    }
    return value;
  }, [search]);

  return (
    <PopupUI open={isOpen}>
      <Content children={children} popupName={popupName} />
    </PopupUI>
  );
};

const Content = ({ children, popupName = "" }) => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const backIconClickHandler = () => {
    navigate(-1);
  };

  // useEffect(() => {
  //   gsap.set(contentRef.current, {
  //     opacity: 0,
  //   });
  // }, [contentRef.current]);

  // useEffect(() => {
  //   if (!contentRef.current) return;
  //   const duration = 1;
  //   gsap.fromTo(
  //     contentRef.current,
  //     { opacity: 0 },
  //     {
  //       opacity: 1,
  //       duration: duration,
  //     }
  //   );
  // }, [contentRef.current]);

  return (
    <Center ref={contentRef}>
      <PopupHeaderUI>
        <IoMdArrowBack onClick={backIconClickHandler} />
        <TitleUI>{popupName}</TitleUI>
        <div />
      </PopupHeaderUI>
      {children}
    </Center>
  );
};

export default memo(Popup);

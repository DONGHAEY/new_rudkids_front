import { IoMdArrowBack } from "react-icons/io";
import { Center, PopupHeaderUI, PopupUI, TitleUI } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { memo, useEffect, useMemo, useRef, useState } from "react";
import qs from "qs";
import gsap from "gsap";

const Popup = ({ children, popupName = "", popupTitle = "" }) => {
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
      <Content children={children} popupTitle={popupTitle} />
    </PopupUI>
  );
};

const Content = ({ children, popupTitle = "" }) => {
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const duration = 1;

  const backIconClickHandler = () => {
    // gsap.fromTo(
    //   contentRef.current,
    //   { opacity: 1 },
    //   {
    //     opacity: 0,
    //     duration: duration,
    //     onComplete: () => {
    //       navigate(-1);
    //     },
    //   }
    // );

    navigate(-1);
  };

  // useEffect(() => {
  //   if (!contentRef.current) return;
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
        <TitleUI>{popupTitle}</TitleUI>
        <div />
      </PopupHeaderUI>
      {children}
    </Center>
  );
};

export default memo(Popup);

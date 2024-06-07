import {
  MenuBarUI,
  MenuBtnListUI,
  MenuBtnTextUI,
  MenuBtnUI,
  DimmUI,
} from "./styles";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import SignatureGradients from "../../../global/signature-gradients";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const menuButtonDtList = [
  {
    name: "Home",
    iconNm: "bxs:home",
    path: "/",
  },
  {
    name: "Shop",
    iconNm: "mdi:shopping",
    path: "/",
  },
  {
    name: "Rude\nCamera",
    iconNm: "ph:camera-fill",
    path: "/rud-camera",
  },
  {
    name: "Rank",
    iconNm: "mdi:prize",
    path: "/rank",
  },
  {
    name: "Collection",
    iconNm: "ph:heart-fill",
    path: "/collection",
  },
  {
    name: "About",
    iconNm: "mdi:information",
    path: "/about",
  },
];

const MenuBar = ({ onClosed }) => {
  const navigate = useNavigate();

  const ref = useRef();
  const dimmRef = useRef();

  useEffect(() => {
    if (!ref.current || !dimmRef.current) return;
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        ref.current,
        {
          left: `-${ref.current.clientWidth}px`,
        },
        {
          left: 0,
        }
      )
      .fromTo(
        dimmRef.current,
        {
          backgroundColor: "rgba(0,0,0,0)",
        },
        {
          backgroundColor: "rgba(0,0,0,0.5)",
        },
        "<"
      );
  }, [ref.current, dimmRef.current]);

  const close = (callback) => {
    const timeline = gsap.timeline();
    timeline
      .to(ref.current, {
        left: `-${ref.current.clientWidth}px`,
        onComplete: () => {
          if (typeof callback === "function") {
            callback();
          }
          onClosed();
        },
      })
      .to(
        dimmRef.current,
        {
          backgroundColor: "rgba(0,0,0,0)",
        },
        "<"
      );
  };

  return (
    <>
      <MenuBarUI ref={ref}>
        <Profile />
        <MenuBtnListUI>
          {menuButtonDtList?.map((menuButtonDt, idx) => {
            return (
              <MenuBtnUI
                onClick={(e) => {
                  close(() => navigate(menuButtonDt.path));
                }}
                background={
                  SignatureGradients[idx % SignatureGradients?.length]
                }
              >
                <Icon icon={menuButtonDt.iconNm} height="37%" />
                <MenuBtnTextUI>{menuButtonDt.name}</MenuBtnTextUI>
              </MenuBtnUI>
            );
          })}
        </MenuBtnListUI>
      </MenuBarUI>
      <DimmUI
        ref={dimmRef}
        onMouseDown={(e) => {
          close();
        }}
        onTouchStart={(e) => {
          close();
        }}
      />
    </>
  );
};

export default MenuBar;

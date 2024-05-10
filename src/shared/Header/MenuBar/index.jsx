import {
  MenuBarUI,
  MenuBtnListUI,
  MenuBtnTextUI,
  MenuBtnUI,
  DimmUI,
} from "./styles";
import Profile from "./Profile";

import HomeImgSrc from "./assets/Home.png";
import AboutImgSrc from "./assets/About.png";
import RecruitImgSrc from "./assets/Recruit.png";
import ShopImgSrc from "./assets/Shop.png";
import RudeCameraImgSrc from "./assets/RudeCamera.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const menuButtonDtList = [
  {
    name: "Home",
    iconSrc: HomeImgSrc,
    background:
      "linear-gradient(180deg,rgba(255, 242, 128, 1) 0%,rgba(255, 249, 198, 1) 100%)",
    path: "/",
  },
  {
    name: "Shop",
    iconSrc: ShopImgSrc,
    background:
      "linear-gradient(180deg,rgba(168, 255, 127, 1) 0%,rgba(222, 255, 207, 1) 100%)",
    path: "/",
  },
  {
    name: "Rude\nCamera",
    iconSrc: RudeCameraImgSrc,
    background:
      "linear-gradient(180deg,rgba(89, 205, 255, 1) 0%,rgba(255, 255, 255, 1) 100%)",
    path: "/rud-camera",
  },
  {
    name: "About",
    iconSrc: AboutImgSrc,
    background:
      "linear-gradient(180deg,rgba(255, 175, 228, 1) 0%,rgba(255, 229, 246, 1) 100%)",
    path: "/about",
  },
  {
    name: "Recruit",
    iconSrc: RecruitImgSrc,
    background:
      "linear-gradient(180deg,rgba(255, 203, 203, 1) 0%,rgba(255, 231, 231, 1) 100%)",
    path: "/recruit",
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
          {menuButtonDtList?.map((menuButtonDt) => {
            return (
              <MenuBtnUI
                onClick={(e) => {
                  close(() => navigate(menuButtonDt.path));
                }}
                background={menuButtonDt.background}
              >
                <img src={menuButtonDt.iconSrc} height="40%" />
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

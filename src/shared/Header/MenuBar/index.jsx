import {
  FlexWrapperUI,
  MenuBarUI,
  MenuBarWrapperUI,
  MenuBtnListUI,
  MenuBtnTextUI,
  MenuBtnUI,
} from "./styles";
import Profile from "./Profile";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import HomeImgSrc from "./assets/Home.png";
import AboutImgSrc from "./assets/About.png";
import RecruitImgSrc from "./assets/Recruit.png";
import ShopImgSrc from "./assets/Shop.png";
import RudeCameraImgSrc from "./assets/RudeCamera.png";
import { useNavigate } from "react-router-dom";

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

const MenuBar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const menuBarRef = useRef();
  useEffect(() => {
    console.log(menuBarRef.current.clientWidth);
    if (open) {
      gsap.to(menuBarRef.current, {
        marginLeft: `0px`,
        duration: 0.5,
      });
    } else {
      gsap.to(menuBarRef.current, {
        marginLeft: `-${menuBarRef.current.clientWidth}px`,
        duration: 0.5,
      });
    }
  }, [open, menuBarRef.current]);

  useEffect(() => {
    gsap.set(menuBarRef.current, {
      marginLeft: `-${menuBarRef.current.clientWidth}px`,
    });
  }, [menuBarRef.current]);

  return (
    <MenuBarWrapperUI>
      <MenuBarUI
        ref={menuBarRef}
        onTouchMove={() => {
          setOpen(false);
        }}
        onMouseDown={() => {
          setOpen(false);
        }}
      >
        <FlexWrapperUI>
          <Profile />
          <MenuBtnListUI>
            {menuButtonDtList?.map((menuButtonDt) => {
              return (
                <MenuBtnUI
                  onClick={() => {
                    navigate(menuButtonDt.path);
                  }}
                  background={menuButtonDt.background}
                >
                  <img src={menuButtonDt.iconSrc} height="40%" />
                  <MenuBtnTextUI>{menuButtonDt.name}</MenuBtnTextUI>
                </MenuBtnUI>
              );
            })}
          </MenuBtnListUI>
        </FlexWrapperUI>
      </MenuBarUI>
    </MenuBarWrapperUI>
  );
};

export default MenuBar;

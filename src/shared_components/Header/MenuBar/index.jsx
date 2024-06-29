import { MenuBarUI, MenuBtnListUI, DimmUI } from "./styles";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { trackClickButton } from "../../../shared_analytics";
import MenuBtn from "./MenuBtn";

const menuButtonDtList = [
  {
    name: "Home",
    iconNm: "bxs:home",
    path: "/home",
  },
  {
    name: "Shop",
    iconNm: "mdi:shopping",
    path: "/shop",
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
    name: "support",
    iconNm: "material-symbols-light:contact-support",
    path: "/support",
  },
];

const MenuBar = ({ onClosed }) => {
  const navigate = useNavigate();

  const ref = useRef();
  const dimmRef = useRef();

  const clickHandler_ = (e, path) => {
    e.stopPropagation();
    close(() => {
      if (path.includes("http") || path.includes("https")) {
        window.location = path;
        return;
      }
      navigate(path);
    });
  };

  useEffect(() => {
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
  }, []);

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

  const instaBtnClickHandler = (e) => {
    trackClickButton("nav bar", {
      type: "instagram",
    });
    trackClickButton("rudkidss instagram", {
      page: "nav bar",
    });
    window.open("https://www.instagram.com/rudkidss");
  };

  return (
    <>
      <MenuBarUI ref={ref} onClick={() => close()}>
        <div
          style={{
            marginTop: "25%",
          }}
        />
        <Profile />
        <MenuBtnListUI>
          {menuButtonDtList?.map((menuButtonDt, idx) => {
            const menuBtnClickHandler = (e) => {
              clickHandler_(e, menuButtonDt.path);
              trackClickButton("nav bar", {
                type: menuButtonDt.name,
              });
            };
            return (
              <MenuBtn
                key={idx}
                onClick={menuBtnClickHandler}
                name={menuButtonDt.name}
                path={menuButtonDt.path}
                iconNm={menuButtonDt.iconNm}
                idx={idx}
              />
            );
          })}
          <MenuBtn
            idx={2}
            name="@Rudkidss"
            iconNm="hugeicons:instagram"
            onClick={instaBtnClickHandler}
          />
        </MenuBtnListUI>
        <div
          style={{
            marginTop: "5%",
          }}
        />
      </MenuBarUI>
      <DimmUI ref={dimmRef} onMouseDown={close} onTouchStart={close} />
    </>
  );
};

export default MenuBar;

import { createRef, useEffect } from "react";
import itemDataList from "./itemDataList";
import { PageUI, LogoWrapperUI } from "./styles";
import BoxList from "./BoxList";
import LoginModal from "../../modals/Login";

const ListPage = () => {
  const pageRef = createRef(null);

  useEffect(() => {
    const eventPreventHandler = (e) => {
      e.preventDefault();
    };
    pageRef.current.addEventListener("wheel", eventPreventHandler, {
      passive: false,
    });
    pageRef.current.addEventListener("touchmove", eventPreventHandler, {
      passive: false,
    });
  }, []);

  return (
    <>
      <PageUI ref={pageRef}>
        <LogoWrapperUI>
          <img height="100%" src={"/Images/rudkids_logo.webp"} />
        </LogoWrapperUI>
        <BoxList itemDataList={itemDataList} />
      </PageUI>
      <LoginModal />
    </>
  );
};

export default ListPage;

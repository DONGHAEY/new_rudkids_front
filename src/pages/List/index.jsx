import { createRef, useEffect } from "react";
import itemDataList from "./itemDataList";
import { PageUI, LogoWrapperUI, HeaderUI } from "./styles";
import BoxList from "./BoxList";
import LoginModal from "../../modals/Login";
import Header from "../../components/Header";

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
        <Header />
        <BoxList itemDataList={itemDataList} />
      </PageUI>
      {/* <LoginModal /> */}
    </>
  );
};

export default ListPage;

import { createRef, useEffect } from "react";
import { PageUI } from "./styles";
import BoxList from "./BoxList";
import LoginModal from "../../modals/Login";
import Header from "../../components/Header";
import { useProductListQuery } from "../../queries/product";

const colorList = ["#FFE818", "#FF3BA5", "#26A4FF", "green"];

const ListPage = () => {
  const pageRef = createRef(null);

  const { data: productListData } = useProductListQuery();

  useEffect(() => {
    const eventPreventHandler = (e) => {
      e.preventDefault();
    };
    if (!pageRef.current) return;
    pageRef.current.addEventListener("wheel", eventPreventHandler, {
      passive: false,
    });
    pageRef.current.addEventListener("touchmove", eventPreventHandler, {
      passive: false,
    });
  }, [pageRef.current]);

  const listData = productListData?.map((productData, idx) => ({
    name: productData.name,
    imageSrc: productData.imageUrl,
    color: colorList[idx],
  }));

  return (
    <>
      <PageUI ref={pageRef}>
        <Header />
        <BoxList listData={listData} />
      </PageUI>
      {/* <LoginModal /> */}
    </>
  );
};

export default ListPage;

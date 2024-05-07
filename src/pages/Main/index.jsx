import { createRef, useEffect } from "react";
import { PageUI } from "./styles";
import BoxList from "./BoxList";
import Header from "../../shared/Header";
import { useProductListQuery } from "../../queries/product";

const colorList = ["#FFE818", "#26A4FF", "#FF3BA5", "green"];

const MainPage = () => {
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
    <PageUI ref={pageRef}>
      <Header isFixed={false} />
      <div
        style={{
          height: "90%",
        }}
      >
        <BoxList listData={listData} />
      </div>
    </PageUI>
  );
};

export default MainPage;

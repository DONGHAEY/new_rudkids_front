import { useProductListQuery } from "../../queries/product";
import Header from "../../shared/Header";
import { ListUI, PageUI, WrapperUI } from "./styles";
import { createRef, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Product from "./Product";

const MainV3Page = () => {
  const { data: productsData } = useProductListQuery();
  const [selectedIdx, setSelectedIdx] = useState(null);

  const productRefList = new Array(productsData?.length)
    .fill(null)
    .map((_, idx) => createRef());

  const selectedProduct = productsData?.[selectedIdx];

  const scrollHandler = () => {
    const scrollTop = gsap.getProperty("html", "scrollTop");
    const clientHeight = gsap.getProperty("html", "clientHeight");
    const scrollMiddle = clientHeight / 2 + scrollTop;
    productRefList?.map((productRef, idx) => {
      const offsetTop = productRef?.current?.offsetTop;
      const height = productRef?.current?.clientHeight;
      // console.log(offsetTop, idx, "-");
      if (scrollMiddle >= offsetTop && scrollMiddle <= offsetTop + height) {
        setSelectedIdx(idx);
      }
    });
  };

  useEffect(() => {
    scrollHandler();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [productRefList]);

  return (
    <PageUI>
      <Header isFixed />
      <ListUI>
        {productsData?.map((productData, idx) => {
          return (
            <WrapperUI ref={productRefList[idx]} key={idx}>
              <Product
                index={idx + 1}
                productData={productData}
                selected={idx === selectedIdx}
              />
            </WrapperUI>
          );
        })}
      </ListUI>
    </PageUI>
  );
};

export default MainV3Page;

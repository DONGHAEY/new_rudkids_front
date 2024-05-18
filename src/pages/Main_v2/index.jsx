import { useProductListQuery } from "../../queries/product";
import Header from "../../shared/Header";
import { ListUI, PageUI } from "./styles";
import Product from "./Product";
import { createRef, useEffect, useRef, useState } from "react";
import ActionBar from "./ActionBar";
import gsap from "gsap";

const MainV2Page = () => {
  const pageRef = useRef();
  const { data: productsData } = useProductListQuery();
  const [selectedIdx, setSelectedIdx] = useState(null);

  const productRefList = new Array(productsData?.length)
    .fill(null)
    .map((_, idx) => createRef());

  const selectedProduct = productsData?.[selectedIdx];

  const scrollHandler = () => {
    const scrollTop = gsap.getProperty("html", "scrollTop");
    const clientHeight = gsap.getProperty("html", "clientHeight");
    // const listOffsetTop = pageRef.current.offsetTop;
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
  }, [pageRef]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [productRefList, pageRef]);

  return (
    <PageUI ref={pageRef}>
      <Header isFixed />
      <ListUI>
        {productsData?.map((productData, idx) => {
          return (
            <div key={idx} ref={productRefList[idx]}>
              <Product
                productData={productData}
                selected={idx === selectedIdx}
              />
            </div>
          );
        })}
      </ListUI>
      <ActionBar productData={selectedProduct} idx={selectedIdx} />
    </PageUI>
  );
};

export default MainV2Page;

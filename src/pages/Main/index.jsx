import Header from "../../shared_components/Header";
import { ListUI, PageUI, WrapperUI } from "./styles";
import Product from "./Product";
import { createRef, useEffect, useState } from "react";
import ActionBar from "./ActionBar";
import gsap from "gsap";
import useProductListQuery from "../../queries/product/useProductListQuery";

const MainPage = () => {
  const { data: productsData } = useProductListQuery();
  const [selectedIdx, setSelectedIdx] = useState(null);

  const productRefList = new Array(productsData?.length)
    .fill(null)
    .map((_, idx) => createRef());

  console.log(productsData, "--");

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
            <WrapperUI key={idx} ref={productRefList[idx]}>
              <Product
                productData={productData}
                selected={idx === selectedIdx}
              />
            </WrapperUI>
          );
        })}
      </ListUI>
      <ActionBar productData={selectedProduct} idx={selectedIdx} />
    </PageUI>
  );
};

export default MainPage;

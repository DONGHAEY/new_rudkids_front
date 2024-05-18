import {
  ProductHangedString,
  ProductImgUI,
  ProductImgWrapperUI,
  ProductTagString,
  ProductTagUI,
  ProductUI,
} from "./styles";
import BarcodeImgSrc from "./assets/barcord.png";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Product = ({ productData, selected }) => {
  const ref = useRef();
  const [repeat, setRepeat] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    if (repeat >= 1) {
      tl.to(ref.current, {
        rotateZ: `${repeat * 7}deg`,
        transformOrigin: "center top",
        ease: "power2.inOut",
        duration: 0.25,
      }).to(ref.current, {
        rotateZ: `-${repeat * 5}deg`,
        transformOrigin: "center top",
        ease: "power2.inOut",
        duration: 0.25,
        onComplete: () => {
          setRepeat((r) => r - 1);
        },
      });
      tl.play();
    } else {
      gsap.to(ref.current, {
        rotateZ: "0deg",
        transformOrigin: "center top",
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [repeat]);

  useEffect(() => {
    if (selected && repeat === 0) {
      setRepeat(4);
    }
  }, [selected]);

  return (
    <ProductUI
      onClick={() => {
        setRepeat(4);
      }}
    >
      <ProductTagUI $selected={selected}>
        <p>{productData?.name}</p>
        <img src={BarcodeImgSrc} width="76px" height="19px" />
      </ProductTagUI>
      {/*  */}
      <ProductTagString />
      <ProductHangedString />
      {/*  */}
      <ProductImgWrapperUI ref={ref}>
        <ProductImgUI src={productData?.components?.[0]?.imageUrl} />
      </ProductImgWrapperUI>
    </ProductUI>
  );
};

export default Product;

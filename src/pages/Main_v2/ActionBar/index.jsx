import pompomiSrc from "./assets/pompomi.png";
import addToCartSrc from "./assets/addToCart.png";
import {
  ButtonSection,
  ButtonUI,
  MoreButtonTxtUI,
  MoreButtonUI,
} from "./styles";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const ActionBar = ({ productData, idx }) => {
  const navigate = useNavigate();
  const moreButtonRef = useRef();

  useEffect(() => {
    if (!productData) return;
    gsap.to(moreButtonRef.current, {
      rotateZ: `${idx * 60}deg`,
    });
  }, [idx]);

  const moreButtonClickHandler = () => {
    navigate(`/product/${[productData.name]}`);
  };

  if (!productData) return null;

  return (
    <ButtonSection>
      <MoreButtonUI ref={moreButtonRef} onClick={moreButtonClickHandler}>
        <MoreButtonTxtUI>{productData?.name}</MoreButtonTxtUI>
        <img src={pompomiSrc} height="130%" />
      </MoreButtonUI>
      <ButtonUI>
        <img src={addToCartSrc} height="100%" />
      </ButtonUI>
    </ButtonSection>
  );
};

export default ActionBar;

import { useMemo } from "react";
import { RudAlertModal } from "../../../../shared_components/RudAlert";
import {
  BtnListUI,
  ProductBoxUI,
  ProductImgUI,
  ProductImgWrapperUI,
  ProductNameTxtUI,
  ProductPriceTxtUI,
  RudAlertContentsUI,
  TitleTxtUI,
  TxtWrapperUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import RudImage from "../../../../shared_components/RudImage";
import { ButtonUI } from "../../../../shared_components/RudAlert/shared_styles";

const PutCartSuccessModal = ({ isOpen, onClose, selectedProduct }) => {
  const navigate = useNavigate();

  const totalPrice = useMemo(() => {
    if (!selectedProduct) return;
    let price = selectedProduct.price;
    selectedProduct.options?.forEach((option) => {
      price += option.price;
    });
    price *= selectedProduct.quantity;
    return price;
  }, [selectedProduct]);

  return (
    <RudAlertModal onClose={onClose} open={isOpen}>
      <RudAlertContentsUI>
        <TitleTxtUI>✅ Added to Cart!</TitleTxtUI>
        <ProductBoxUI>
          <ProductImgWrapperUI>
            <RudImage ImgUI={ProductImgUI} src={selectedProduct?.thumnail} />
          </ProductImgWrapperUI>
          <TxtWrapperUI>
            <ProductNameTxtUI>{selectedProduct?.name}</ProductNameTxtUI>
            <ProductPriceTxtUI>
              ₩ {totalPrice?.toLocaleString("ko-KR")}
            </ProductPriceTxtUI>
          </TxtWrapperUI>
        </ProductBoxUI>
        <BtnListUI>
          <ButtonUI
            onClick={() => {
              navigate("/cart");
            }}
          >
            장바구니로 이동
          </ButtonUI>
          <ButtonUI
            background="linear-gradient(180deg, #14ff00 0%, #10ce00 100%)"
            onClick={onClose}
          >
            확인
          </ButtonUI>
        </BtnListUI>
      </RudAlertContentsUI>
    </RudAlertModal>
  );
};

export default PutCartSuccessModal;

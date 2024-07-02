import { useMemo } from "react";
import RudAlert from "../../../../shared_components/RudAlert";
import {
  BtnListUI,
  ConfirmBtnUI,
  GoCartBtnUI,
  ProductBoxUI,
  ProductImgUI,
  ProductImgWrapperUI,
  ProductNameTxtUI,
  ProductPriceTxtUI,
  PutCartSuccessModalUI,
  RudAlertContentsUI,
  TitleTxtUI,
  TxtWrapperUI,
} from "./styles";
import { useNavigate } from "react-router-dom";
import RudImage from "../../../../shared_components/RudImage";

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
    <PutCartSuccessModalUI open={isOpen}>
      <RudAlert onClose={onClose}>
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
            <GoCartBtnUI
              onClick={() => {
                navigate("/cart");
              }}
            >
              장바구니로 이동
            </GoCartBtnUI>
            <ConfirmBtnUI onClick={onClose}>확인</ConfirmBtnUI>
          </BtnListUI>
        </RudAlertContentsUI>
      </RudAlert>
    </PutCartSuccessModalUI>
  );
};

export default PutCartSuccessModal;

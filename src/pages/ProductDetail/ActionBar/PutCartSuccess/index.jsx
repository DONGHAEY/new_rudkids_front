import RudAlert from "../../../../shared_components/RudAlert";
import {
  BtnListUI,
  ConfirmBtnUI,
  GoCartBtnUI,
  ProductBoxUI,
  ProductNameTxtUI,
  ProductPriceTxtUI,
  PutCartSuccessModalUI,
  RudAlertContentsUI,
  TitleTxtUI,
} from "./styles";
import { useNavigate } from "react-router-dom";

const PutCartSuccessModal = ({ isOpen, onClose, productData }) => {
  const navigate = useNavigate();
  return (
    <PutCartSuccessModalUI open={isOpen}>
      <RudAlert onClose={onClose}>
        <RudAlertContentsUI>
          <TitleTxtUI>✅ Added to Cart!</TitleTxtUI>
          <ProductBoxUI>
            <img height="66px" src={productData?.thumnail} />
            <div>
              <ProductNameTxtUI>Rudkids TShirt</ProductNameTxtUI>
              <ProductPriceTxtUI>₩ 139,000</ProductPriceTxtUI>
            </div>
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

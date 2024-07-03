import { Modal } from "@mui/material";
import styled from "styled-components";

export const PutCartSuccessModalUI = styled(Modal)`
  width: 90%;
  height: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const RudAlertContentsUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: clamp(0rem, 8vw, 1.9rem);
`;

export const TitleTxtUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: clamp(0rem, 5.7vw, 1.37rem);
  letter-spacing: -3%;
  line-height: 100%;
`;

export const ProductBoxUI = styled.div`
  margin-top: 8%;
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: clamp(0rem, 4vw, 1rem);
  overflow: hidden;
  padding-block: 4%;
  padding-inline: 5%;
`;

export const ProductImgWrapperUI = styled.div`
  width: 40%;
  aspect-ratio: 1/1;
`;

export const ProductImgUI = styled.img`
  width: 100%;
`;

export const ProductNameTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 3.8vw, 1rem);
  line-height: 100%;
`;

export const ProductPriceTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 3.4vw, 0.9rem);
  margin-top: 3%;
`;

export const BtnListUI = styled.div`
  display: flex;
  width: 90%;
  gap: 3%;
  margin-top: 8%;
  height: 100%;
`;

export const GoCartBtnUI = styled.button`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 4.3vw, 1rem);
  line-height: 0%;
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #dedede 100%);
  border: #aeaeae solid 1.4px;
  color: black;
  border-radius: clamp(0rem, 4vw, 1.3rem);
  padding-block: clamp(0rem, 8vw, 1.7rem);
`;

export const ConfirmBtnUI = styled.button`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 4.3vw, 1rem);
  line-height: 0%;
  width: 80%;
  background: linear-gradient(180deg, #14ff00 0%, #10ce00 100%);
  border: #00b01c solid 1.4px;
  color: black;
  padding-block: clamp(0rem, 8vw, 1.7rem);
  border-radius: clamp(0rem, 4vw, 1.3rem);
`;

export const TxtWrapperUI = styled.div`
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3%;
`;

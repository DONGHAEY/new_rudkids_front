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
  padding-block: 30px;
  padding-inline: 30px;
`;

export const TitleTxtUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 22px;
  letter-spacing: -3%;
  line-height: 100%;
`;

export const ProductBoxUI = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 26px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  padding-block: 14px;
  padding-inline: 25px;
`;

export const ProductNameTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 14.18px;
  line-height: -3%;
`;

export const ProductPriceTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 13px;
`;

export const BtnListUI = styled.div`
  display: flex;
  width: 100%;
  gap: 11px;
  margin-top: 29px;
  height: 60px;
`;

export const GoCartBtnUI = styled.button`
  font-family: Pretendard-Bold;
  font-size: 16px;
  line-height: 0%;
  width: 100%;
  background: linear-gradient(180deg, #ffffff 0%, #dedede 100%);
  border: #aeaeae solid 1.4px;
  color: black;
  border-radius: 20px;
`;

export const ConfirmBtnUI = styled.button`
  font-family: Pretendard-Bold;
  font-size: 16px;
  line-height: 0%;
  width: 80%;
  background: linear-gradient(180deg, #14ff00 0%, #10ce00 100%);
  border: #00b01c solid 1.4px;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.6) 1px 1px 1px;
  border-radius: 20px;
`;

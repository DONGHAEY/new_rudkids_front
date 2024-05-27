import styled from "styled-components";

export const ShippingWrapperUI = styled.div`
  display: flex;
  width: 100%;
`;

export const ShippingUI = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
  background-color: white;
  gap: 10px;
  border-radius: 12px;
`;

export const ShippingNameTextUI = styled.p`
  font-family: Pretendard-ExtraBold;
  font-size: 20px;
`;

export const RecieverNameTextUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 15px;
  letter-spacing: -0.3px;
  word-spacing: 0px;
`;

export const RecieverPhoneNumberTextUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 13px;
  color: #898989;
  letter-spacing: -0.3px;
  word-spacing: 0px;
`;

export const AddressTextUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 15px;
  letter-spacing: -0.3px;
  word-spacing: 0px;
`;

export const EditIconImgUI = styled.img`
  width: 27px;
  position: absolute;
  right: 20px;
  top: 16px;
`;

export const ColWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? "0px"};
`;

export const RowWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ gap }) => gap ?? "0px"};
`;

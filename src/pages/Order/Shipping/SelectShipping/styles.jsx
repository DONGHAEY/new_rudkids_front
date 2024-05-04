import styled from "styled-components";

export const ShippingListWrapperUI = styled.div`
  background-color: rgba(255, 255, 255, 1);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`;

export const ShippingListUI = styled.div`
  padding-block: 20px;
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
`;

export const AddButtonUI = styled.button`
  border: solid 2px #e7e7e7;
  width: 100%;
  border-radius: 12px;
  height: 55px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: white;
  color: black;
  cursor: pointer;
`;

export const AddBtnTextUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  color: black;
`;

export const FlexWrapperUI = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

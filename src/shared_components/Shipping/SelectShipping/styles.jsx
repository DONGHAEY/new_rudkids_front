import styled from "styled-components";

export const ShippingListUI = styled.div`
  padding-block: 20px;
  display: flex;
  padding-inline: 5%;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: scroll;
  background: white;
  gap: 21px;
`;

export const AddButtonUI = styled.button`
  border: solid 2px #e7e7e7;
  width: 100%;
  border-radius: 12px;
  min-height: 55px;
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

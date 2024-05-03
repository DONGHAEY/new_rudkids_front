import styled from "styled-components";

export const ShippingWrapperUI = styled.div`
  width: 100%;
`;
export const ShippingUI = styled.div`
  padding: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: between;
  position: relative;
  border-radius: 12px;
  background-color: ${({ isSelected }) => (isSelected ? "#e8f5ff" : "#FFFFFF")};
`;

export const ShippingNameTextUI = styled.p`
  font-family: Pretendard-Bold;
  color: ${({ isSelected }) => (isSelected ? "#3169d6" : "black")};
  font-size: 18px;
`;

export const RecieverNameTextUI = styled.p`
  font-family: Pretendard-Bold;
  color: black;
  font-size: 15px;
`;

export const RecieverPhoneTextUI = styled.p`
  font-family: Pretendard-SemiBold;
  color: #898989;
  font-size: 13px;
`;

export const AddressTextUI = styled.p`
  font-family: Pretendard-SemiBold;
  color: black;
  font-size: 15px;
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

export const CurrentSignUI = styled.div`
  display: flex;
  background-color: #f3f3f3;
  color: #7a7a7a;
  font-size: 11px;
  border-radius: 4px;
  padding-inline: 8px;
  padding-block: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard-Medium;
`;

export const ChooseButtonUI = styled.div`
  position: absolute;
  padding: 0px;
  right: 13px;
  top: 13px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? "#c3e2ff" : "#F3F3F3")};
  color: ${({ isSelected }) => (isSelected ? "#3169d6" : "#7A7A7A")};
  font-size: 12px;
  padding: 8px;
  border-radius: 6px;
  font-family: Pretendard-Bold;
  border: none;
`;

export const ActionButtonUI = styled.button`
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: Pretendard-Bold;
  background-color: white;
  border-radius: 6px;
  color: black;
  border: solid 1.4px #dddddd;
  cursor: pointer;
`;

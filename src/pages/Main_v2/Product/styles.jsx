import styled from "styled-components";

export const ProductUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 23px;
  background-color: white;
  border: solid black 1px;
  padding: 17px;
  border-radius: 14px;
`;
export const RowBetweenUI = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  align-items: center;
  justify-content: space-between;
`;

export const ProductNameTxtUI = styled.p`
  font-family: Poppins-Bold;
  letter-spacing: -1px;
  font-size: 19px;
  line-height: 100%;
  color: ${({ $selected }) => ($selected ? "white" : "black")};
  border-radius: 13px;
  background-color: ${({ $selected }) => ($selected ? "black" : "none")};
  padding-block: 5px;
  padding-inline: 14px;
`;

export const IndexTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 14px;
  letter-spacing: 0px;
`;

export const DescriptTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 14px;
  letter-spacing: -1px;
`;

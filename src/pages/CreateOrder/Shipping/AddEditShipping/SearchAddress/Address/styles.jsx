import styled from "styled-components";

export const AddressUI = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 28px;
  padding-block: 26px;
  background-color: white;
  border: solid 2px #f2f2f2;
  gap: 12px;
  border-radius: 12px;
`;

export const PostalCodeTextUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 16px;
`;

export const AddressTextUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 13px;
`;

export const RowUI = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: row;
  align-items: center;
`;

export const StreetNameSignUI = styled.div`
  font-family: Pretendard-Bold;
  color: #3169d6;
  background-color: #c3e2ff;
  padding: 6px;
  border-radius: 10px;
  min-width: 29px;
  font-size: 11px;
`;

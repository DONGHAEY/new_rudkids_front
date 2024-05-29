import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: scroll;
  gap: 27px;
`;

export const SearchAddressUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 30px;
  width: 100%;
  width: 100%;

  overflow: scroll;
  gap: 27px;
`;

export const SearchSectionUI = styled.div`
  display: flex;
  width: 90%;
`;

export const AddressListUI = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 10px;
  overflow: scroll;
`;

export const TextInputUI = styled.input`
  background-color: #f2f2f2;
  border: none;
  border-radius: 20px;
  padding-inline: 30px;
  padding-block: 20px;
  color: black;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  ::-ms-input-placeholder {
    color: #a1a1a1;
    font-size: 100px;
  }
  ::-webkit-input-placeholder {
    color: #a1a1a1;
  }
`;

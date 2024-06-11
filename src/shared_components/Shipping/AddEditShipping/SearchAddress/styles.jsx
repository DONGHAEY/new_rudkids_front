import styled from "styled-components";

export const SearchAddressUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
  gap: 27px;
`;

export const SearchSectionUI = styled.div`
  display: flex;
  width: 90%;
  margin-top: 30px;
`;

export const AddressListUI = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  gap: 10px;
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

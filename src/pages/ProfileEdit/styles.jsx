import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 25px;
  height: 100%;
  overflow: scroll;
`;

export const ListUI = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LinkUI = styled.div`
  width: 100%;
  padding-block: 18px;
  /* padding-inline: 30px; */
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: solid 1px #c1c1c1;
`;

export const ColumnNmTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 17px;
`;

export const ColumnContentTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  color: #c1c1c1;
  font-size: 17px;
`;

export const CardWrapperUI = styled.div`
  margin-top: 30px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardImgUI = styled.img`
  width: 100%;
`;

export const CardEmptyBtnUI = styled.button`
  position: absolute;
  z-index: 3;
  background-color: white;
  padding-inline: 30px;
  padding-block: 16px;
  border-radius: 33px;
  border: none;
  font-family: Pretendard-Bold;
`;

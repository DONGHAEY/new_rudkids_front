import styled from "styled-components";

export const OrderListUI = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  gap: 20px;
  background-color: #f3f3f3;
`;

export const ListOfOrderUI = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-inline: 4%;

  gap: 16px;
`;

export const HeadUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DateTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 20px;
  line-height: 120%;
`;

export const ProductListUI = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  overflow: scroll;
`;

export const ProductImgWrapperUI = styled.div`
  max-height: 100%;
  height: 90px;
  aspect-ratio: 1/1;
  background-color: #f3f3f3;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductImgUI = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
  border-radius: 12px;
`;

export const MoreTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 13px;
  color: #616161;
`;

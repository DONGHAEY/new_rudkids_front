import styled from "styled-components";

export const CollectionUI = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-block: 8%;
  border-radius: 12px;
`;

export const CollectionArrowUI = styled.div`
  position: absolute;
  right: 5%;
  top: 30%;
  font-size: 20px;
`;

export const CollectionTitleUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: clamp(0rem, 6vw, 1.3rem);
  line-height: 100%;
`;

export const CollectionHeadUI = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  position: relative;
`;

export const CollectionCntTxtUI = styled.p`
  background-color: #e9e9e9;
  color: black;
  border-radius: 7px;
  font-family: Poppins-SemiBold;
  font-size: clamp(0rem, 6vw, 1.3rem);
  line-height: 100%;
  padding: 5%;
`;

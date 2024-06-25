import styled from "styled-components";

export const PageUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

export const ButtonListUI = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  gap: 3%;
  text-align: center;
  margin-top: 20px;
`;

export const TextWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: 13px;
  gap: 10px;
  margin-block: 20px;
  padding-inline: 10px;
`;

export const ContentsTitleUI = styled.h1`
  margin-block: 30px;
  text-align: left;
  width: 95%;
  font-size: 40px;
`;

export const H1 = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

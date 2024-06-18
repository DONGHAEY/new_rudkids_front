import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterUI = styled.div`
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  color: black;
  align-items: center;
  width: 100%;
  font-family: Pretendard-Medium;
  font-size: 10px;
  gap: 10px;
  text-decoration: none;
  margin-top: 30px;
`;

export const InfoBtnUI = styled.button`
  border: none;
  background: none;
  font-family: Pretendard-Bold;
  font-size: 10px;
  color: black;
`;

export const FooterLabel = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-family: Poppins-Bold;
  padding-block: 10px;
`;

export const FooterContentsUI = styled.p`
  text-align: center;
  padding-inline: 30px;
  padding-top: 10px;
`;

export const LinkUI = styled(Link)`
  color: black;
  margin-inline: 3px;
`;

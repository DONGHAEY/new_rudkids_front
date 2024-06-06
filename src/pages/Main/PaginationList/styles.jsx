import { Link } from "react-router-dom";
import styled from "styled-components";

export const PaginationListUI = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 3px;
  font-family: Poppins-Bold;
  font-size: 15px;
`;

export const PageBtnUI = styled(Link)`
  font-family: ${({ selected }) =>
    selected ? "Poppins-Bold" : "Poppins-Medium"};
  font-size: 15px;
  text-decoration: none;
  color: black;
`;

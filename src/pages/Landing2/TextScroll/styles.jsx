import Marquee from "react-fast-marquee";
import styled from "styled-components";

export const TextScrollUI = styled.div`
  width: 100%;
  overflow: scroll;
  background-color: black;
  color: white;
  padding-block: 1.5%;
`;

export const MarqueeUI = styled(Marquee)`
  width: 100%;
  color: white;
  text-align: center;
  align-items: center;
  display: flex;
`;
export const TxtWrapperUI = styled.div`
  display: flex;
  margin-right: 20px;
  font-size: clamp(0rem, 4vw, 1rem);
`;

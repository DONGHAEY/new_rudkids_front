import styled from "styled-components";

export const RudWndowUI = styled.div`
  width: ${({ width }) => width ?? "80%"};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  background-color: #c1bcb4;
`;

export const HeadUI = styled.div`
  height: 25px;
  width: 100%;
  border-style: inset;
  background-color: #1b3c8d;
  color: white;
  display: flex;
  flex-direction: row;
  z-index: 1;
  gap: 10px;
  align-items: center;
  border-left: 5px solid;
  border-top: 5px solid;
  border-bottom: 5px solid;
  border-right: 5px solid;
  border-top-color: rgba(24, 50, 117, 1);
  border-left-color: rgba(20, 45, 104, 1);
  border-right-color: rgba(12, 26, 61, 1);
  border-bottom-color: rgba(12, 26, 61, 1);
  position: relative;
`;

export const HeadSymbolUI = styled.img`
  margin-left: 5%;
  height: 70%;
`;

export const WindowBorderUI = styled.div`
  position: absolute;
  width: 100%;
  height: 98%;
  border-style: inset;
  border: 0px 5px 5px 5px solid;
  border-left: 5px solid;
  border-bottom: 5px solid;
  border-right: 5px solid;
  border-left-color: rgba(144, 140, 133, 1);
  border-right-color: rgba(92, 90, 86, 1);
  border-bottom-color: rgba(92, 90, 86, 1);
`;

export const RudAddressTxtUI = styled.div`
  margin-top: 2.3%;
  background: black;
  font-family: boba;
  font-size: 13px;
  line-height: 0;
`;

export const CloseBtnUI = styled.div`
  position: absolute;
  aspect-ratio: 1/1;
  height: 60%;
  background-color: rgba(193, 188, 180, 1);
  border: solid 2.5px rgba(84, 82, 78, 1);
  color: black;
  text-align: center;
  top: 10%;
  right: 7%;
`;

export const ContentsUI = styled.div`
  width: 100%;
  /* height: auto; */
  padding: 5px;
  z-index: 2;
`;

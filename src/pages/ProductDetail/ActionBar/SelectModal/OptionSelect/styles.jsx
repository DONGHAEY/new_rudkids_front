import styled from "styled-components";

export const SelectBoxUI = styled.div`
  position: relative;
  justify-content: space-between;
  align-items: center;
  display: flex;
  color: black;
  background-color: white;
  border: 1.4px solid #dedede;
  border-radius: 9px;
  padding-inline: 8.5%;
  padding-block: 5.5%;
  font-family: Poppins-Bold;
  font-size: 16px;
`;

export const OptionTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 16px;
  line-height: 100%;
`;

export const OptionListUI = styled.div`
  border-radius: 22px;
  width: 100%;
  border-top: #dedede 1px solid;
  border-right: #dedede 1px solid;
  border-left: #dedede 1px solid;
  position: absolute;
  bottom: 100%;
  z-index: 9;
`;

export const OptionUI = styled.div`
  padding-block: 4%;
  line-height: 100%;
  font-family: Poppins-Bold;
  line-height: 100%;
  display: flex;
  gap: 5%;
  align-items: center;
  padding-inline: 20px;
  background-color: #f1f1f1;
  border-bottom: #dedede 1px solid;
`;

export const OptionImgUI = styled.img`
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 10px;
`;

export const ColUI = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 9999;
`;

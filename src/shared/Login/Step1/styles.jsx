import styled from "styled-components";

export const BoxTitleWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapperUI = styled.div`
  height: 100px;
  object-fit: cover;
`;

export const LogoImgUI = styled.img`
  height: 100%;
`;

export const BoxTitleUI = styled.p`
  font-family: Poppins-Bold;
  margin: 0;
  font-size: 31px;
  line-height: 120%;
`;

export const BoxButtonUI = styled.p`
  font-family: Poppins-SemiBold;
  background-color: black;
  color: white;
  border-radius: 18px;
  padding-inline: 20px;
  height: 60px;
  font-size: 14px;
  margin-top: 13px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;
export const BoxTopUI = styled.div`
  width: 100%;
  height: 250px;
`;

export const BoxMiddleUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-radius: 10px;
`;
export const BoxBottomUI = styled.div`
  font-family: Poppins-SemiBold;
  padding-block: 30px;
  font-size: 16px;
`;

export const ModalUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
`;

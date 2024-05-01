import styled from "styled-components";

export const ModalUI = styled.div`
  background-color: rgba(0, 0, 0, 50%);
  position: absolute;
  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const AlertBoxUI = styled.div`
  background-color: rgba(255, 255, 255, 100%);
  display: flex;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-inline: 20px;
`;

export const ImgWrapperUI = styled.div`
  height: 70px;
  margin-top: 15px;
`;

export const ImgUI = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const TitleUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 19px;
  margin-top: 15px;
  line-height: 110%;
`;

export const ContentUI = styled.p`
  font-family: Poppins-Medium;
  font-size: 14px;
  margin-top: 10px;
  line-height: 110%;
`;

export const ButtonWrapperUI = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonUI = styled.button`
  border: none;
  background: none;
  color: #368bff;
  font-family: Poppins-Bold;
  font-size: 16px;
  cursor: pointer;
`;

export const BrUI = styled.hr`
  height: 1px;
  width: 90%;
  border: none;
  background-color: rgba(172, 172, 172, 50%);
  margin-top: 15px;
`;

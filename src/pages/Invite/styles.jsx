import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  background: linear-gradient(
    180deg,
    rgba(79, 183, 255, 1) 0%,
    rgba(223, 245, 255, 1) 34%,
    rgba(223, 245, 255, 1) 58%,
    rgba(79, 183, 255, 1) 89%
  );
`;

export const FlexColUI = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const TitleTxtUI = styled.h1`
  font-family: Poppins-Bold;
  font-size: 47.78px;
  line-height: 114%;
`;

export const SubTitleTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 16px;
  line-height: 114%;
  margin-top: 7px;
`;

export const MiddleSectionUI = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

export const TicketImgUI = styled.img`
  margin-top: 30px;
  z-index: 4;
  width: 60%;
`;

export const HandImgWrapperUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: -30px;
  z-index: 3;
`;

export const BottomBoxUI = styled.div`
  position: absolute;
  width: 100%;
  max-height: 376px;
  height: 40%;
  bottom: 0;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BoxBgUI = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  z-index: -1;
`;

export const InviteBtnUI = styled.button`
  display: flex;
  width: 80%;
  max-width: 290px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: black;
  border-radius: 22px;
  color: white;
  font-size: 24px;
  border: none;
  font-family: Poppins-Bold;
  height: 77px;
  margin-top: 49px;
`;

export const CompleteBtnUI = styled(InviteBtnUI)`
  background-color: #00dd31;
  color: #000000;
  font-family: Pretendard-Bold;
`;

export const InviteProgressSectionUI = styled.div`
  width: 100%;
  max-width: 245.97px;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

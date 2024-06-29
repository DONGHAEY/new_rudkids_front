import styled from "styled-components";

export const WhiteWrapperUI = styled.div`
  width: 90%;
  max-width: 327px;
  height: auto;
  background-color: white;
  border-radius: 21.87px;
`;

export const InvitationUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 32px;
`;

export const TitleTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 28px;
  font-size: clamp(0rem, 8vw, 1.8rem);
  text-align: center;
  line-height: 119%;
`;

export const DescriptionTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 11.41px;
  font-size: clamp(0rem, 4vw, 0.8rem);
  color: #727272;
  line-height: 100%;
  letter-spacing: -5%;
`;

export const BlueWrapperUI = styled.div`
  background: linear-gradient(
    180deg,
    rgba(3, 143, 239, 1) 0%,
    rgba(105, 188, 245, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 7%;
  padding-inline: 7%;
  border-radius: 15.21px;
`;

export const BoxDiv = styled.div`
  background-color: #2a2a2a;
  padding-inline: 7%;
  padding-block: 5%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-radius: 31.28px;
`;

export const BoxTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: clamp(0rem, 4vw, 0.8rem);
  color: white;
  letter-spacing: -1px;
`;

export const TicketListUI = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 4%;
  margin-top: 8%;
`;

export const TicketImg = styled.img`
  width: 100%;
`;

export const ButtonUI = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  padding-block: 7%;
  max-width: 218px;
  gap: 5%;
  width: 80%;
  border: none;
  border-radius: 13.31px;
`;

export const ButtonTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: clamp(0rem, 4.3vw, 1rem);
  line-height: 100%;
  letter-spacing: -5%;
  color: white;
`;

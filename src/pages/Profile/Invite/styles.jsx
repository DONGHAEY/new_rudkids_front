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
  line-height: 28px;
  text-align: center;
  line-height: 119%;
`;

export const DescriptionTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 11.41px;
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
  gap: 20px;
  padding-block: 18px;
  padding-inline: 17px;
  border-radius: 15.21px;
`;

export const BoxDiv = styled.div`
  background-color: #2a2a2a;
  padding-inline: 15px;
  padding-block: 8px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  border-radius: 31.28px;
`;

export const BoxTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 11.41px;
  color: white;
  letter-spacing: -1px;
`;

export const TicketListUI = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
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
  padding-inline: 19px;
  padding-block: 15px;
  max-width: 218px;
  gap: 9px;
  width: 80%;
  border: none;
  border-radius: 13.31px;
`;

export const ButtonTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: -5%;
  color: white;
`;

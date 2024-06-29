import styled from "styled-components";

export const ProfileUI = styled.div`
  background-color: #f3f3f3;
  border-radius: 126px;
  padding-inline: 7%;
  padding-block: 8%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImgWrapperUI = styled.div`
  height: 100%;
  padding: 1%;
  aspect-ratio: 1/1;
  object-fit: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgUI = styled.img`
  position: absolute;
  height: 100%;
  border-radius: 100%;
`;

export const ContentWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
export const LoginTextUI = styled.p`
  font-size: 17px;
  line-height: 25px;
  font-family: Pretendard-Bold;
  overflow: hidden;
  letter-spacing: -1px;
`;

export const NameTextUI = styled.p`
  font-size: clamp(0.5rem, 5.5vw, 1rem);
  line-height: 150%;
  font-family: Poppins-Bold;
  overflow: hidden;
  letter-spacing: -1px;
`;

export const RankingTextUI = styled.p`
  font-size: clamp(0.3rem, 4.5vw, 0.8rem);
  line-height: 150%;
  font-family: Poppins-SemiBold;
  color: #8e8e8e;
`;

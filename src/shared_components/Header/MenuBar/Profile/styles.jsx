import styled from "styled-components";

export const ProfileUI = styled.div`
  background-color: #f3f3f3;
  border-radius: 126px;
  padding: 15px;
  padding-inline: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ImgWrapperUI = styled.div`
  height: 50px;
  aspect-ratio: 1/1;
  object-fit: cover;
  position: relative;
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

export const NameTextUI = styled.p`
  font-size: 17px;
  line-height: 25px;
  font-family: Poppins-Bold;
  overflow: hidden;
  letter-spacing: -1px;
`;

export const RankingTextUI = styled.p`
  font-size: 13px;
  line-height: 18px;
  font-family: Poppins-SemiBold;
  color: #8e8e8e;
`;

import styled from "styled-components";
export const BoxUI = styled.div`
  background-color: #f6f6f6;
  ${({ $isRotated }) =>
    $isRotated ? "transform: perspective(300px) rotateX(-20deg);" : ""}
  border-radius: 7px;
  aspect-ratio: 1 / 1;
  width: 75%;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px rgba(0, 0.6, 0.6, 0.6); /* 그림자 설정 */
  justify-content: space-between;
  overflow: hidden;
`;

export const BoxTitleUI = styled.div`
  background-color: white;
  padding: 10px;
  padding-block: 2px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-family: Poppins-SemiBold;
`;

export const BoxButtonWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

export const BoxButtonUI = styled.div`
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "#00A507"};
  width: 10px;
  height: 10px;
  border-radius: 100%;
`;

export const BoxBarUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? "black"};
  padding: 10px;
  padding-inline: 10px;
`;

export const BoxContentUI = styled.div`
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const BoxContentImgWrapperUI = styled.div`
  position: absolute;
  height: 80%;
`;

export const BoxContentImgUI = styled.img`
  position: absolute;
  z-index: 1;
  height: 80%;
`;

export const BoxBackgroundUI = styled.img`
  position: absolute;
  z-index: 0;
  // width: 100%;
  height: 50%;
  bottom: 0;
`;

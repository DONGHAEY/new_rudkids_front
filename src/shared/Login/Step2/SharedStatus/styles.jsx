import styled from "styled-components";

export const SharedStatusUI = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  gap: 3px;
`;

export const ShareStatusTextUI = styled.p`
  font-size: 11.93px;
  gap: 2px;
  font-family: Poppins-Bold;
  color: ${({ $isShared }) => ($isShared ? "black" : "#A6A6A6")};
`;

export const CircleImgWrapperUI = styled.div`
  height: 90%;
  cursor: ${({ $active }) => ($active ? "pointer" : "")};
  border-radius: 100%;
  @keyframes motion {
    0% {
      border: 0px solid transparent;
      border-opacity: 0;
      background-image: radial-gradient(circle, lime, transparent);
    }
    100% {
      border: 7.5px solid transparent;
      border-opacity: 1;
      background-image: radial-gradient(circle, lime, transparent);
    }
  }
  ${({ $active }) =>
    $active
      ? `animation: motion 1s linear 0s infinite alternate;`
      : `border : none;`};
`;

export const CircleImgUI = styled.img`
  object-fit: cover;
  height: 100%;
  border-radius: 100%;
`;

import styled from "styled-components";

export const ButtonUI = styled.button`
  font-family: Pretendard-Bold;
  font-size: clamp(0rem, 4vw, 1rem);
  line-height: 0%;
  width: 100%;
  background: ${({ background }) =>
    background ?? "linear-gradient(180deg, #ffffff 0%, #dedede 100%)"};
  border: #aeaeae solid 1.4px;
  color: black;
  border-radius: clamp(0rem, 4vw, 1rem);
  padding-block: clamp(0rem, 8vw, 2rem);
`;

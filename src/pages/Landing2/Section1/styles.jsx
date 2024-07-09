import styled from "styled-components";

export const SectionUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #003487;
  position: relative;
`;

export const BeetweenUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  position: relative;
  width: 100%;
  z-index: 1;
  margin-bottom: 7%;
`;

export const ColliderUI = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const TeacherImgUI = styled.img`
  position: absolute;
  width: 60%;
  bottom: 0;
  left: 0;
`;

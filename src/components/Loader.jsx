import { Html, useProgress } from "@react-three/drei";
import styled from "styled-components";

export const Loader = () => {
  const progress = useProgress();

  if (progress.progress >= 100) {
    return null;
  }
  return (
    <Html center>
      <BluredBackground />
      <Container>
        <ProgressBar>Loading...</ProgressBar>
      </Container>
    </Html>
  );
};

const BluredBackground = styled.div`
  width: 400px;
  height: 400px;
  background-color: red;
  border-radius: 50%;
  filter: blur(300px);
`;

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  justify-content: flex-start;
  align-items: center;
  top: 50%;
  left: 50%;
  z-index: 1000;
  gap: 20px;
`;
const ProgressBar = styled.div`
  font-size: 20px;
  color: #ccc;
`;

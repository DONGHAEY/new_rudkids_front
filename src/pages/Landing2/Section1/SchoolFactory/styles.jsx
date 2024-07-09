import { motion } from "framer-motion";
import styled from "styled-components";

export const SchoolFactoryUI = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const WrapperUI = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

export const StudentImgUI = styled.img`
  width: 110px;
  padding-inline: 10px;
`;

export const AxisPipeUI = styled.img`
  position: absolute;
  bottom: 20%;
  z-index: -1;
  width: 100%;
`;

export const NormalBarcordUI = styled(motion.img)`
  position: absolute;
  width: 80%;
  top: 30%;
  left: 30%;
  transform: rotateZ(${Math.random() < 1 ? "-" : ""}${Math.random() * 90});
  z-index: 99;
`;

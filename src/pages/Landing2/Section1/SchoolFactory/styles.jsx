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
  width: 120px;
  padding-inline: 10px;
`;

export const AxisPipeUI = styled.img`
  position: absolute;
  bottom: 20%;
  z-index: 0;
  width: 100%;
`;

export const NormalBarcordUI = styled(motion.img)`
  position: absolute;
  width: 80%;
  top: 40%;
  left: 8%;
  z-index: 99;
`;

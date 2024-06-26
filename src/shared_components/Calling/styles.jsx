import { Modal } from "@mui/material";
import styled from "styled-components";

export const ModalUI = styled(Modal)`
  width: 100%;
  height: 100%;
  max-width: 430px;
  margin-inline: auto;
  display: flex;
  overflow: scroll;
  /* padding-top: 30px; */
  /* padding-block: 30px; */
  /* overflow: scroll; */
`;

export const CallBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 100%;
  min-height: 500.05px;
  width: 80%;
  height: 80%;
  position: relative;
  z-index: 0;
  border-radius: 30.95px;
  margin-inline: auto;
  margin-top: auto;
  margin-bottom: auto;
  background-color: gainsboro;
`;

export const ViedeoImgUI = styled.img`
  position: absolute;
  top: -30px;
  width: 70px;
`;

export const CallFromInfoUI = styled.div`
  width: 100%;
  margin-top: -25%;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CallFromImgUI = styled.img`
  width: 33%;
  margin-bottom: 8px;
`;
export const SpacerUI = styled.div`
  margin-top: 10px;
`;

export const ProfileNmTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 37.26px;
  line-height: 105%;
  color: white;
`;

export const CallBtnUI = styled.div`
  width: 50%;
  position: absolute;
  bottom: 5%;
`;

export const CallOffImgBtnUI = styled.img`
  width: 60.71px;
  position: absolute;
  bottom: 10%;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 1s ease-in-out forwards;
`;

export const CallInfoUI = styled.div`
  position: absolute;
  top: 7%;
  left: 8%;
  width: 80%;
  display: flex;
  flex-direction: row;
  height: 52px;
  gap: 10px;
`;

export const CallTextInfo = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  font-family: Poppins-Bold;
  font-size: 18px;
  color: white;
`;

export const VideoUI = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30.95px;
  z-index: -1;
`;

export const ThumnailImgUI = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border: none;
  border-radius: 30px;
  z-index: -2;
  filter: blur(5px);
  backdrop-filter: blur(5px);
`;

export const FaceTimeSignUI = styled.div`
  display: flex;
  gap: 6px;
  line-height: 100%;
  align-items: center;
  justify-content: center;
`;

export const FaceTimeTxtUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 10px;
  color: white;
  line-height: 0%;
`;
export const FaceTimeKrTxtUI = styled.p`
  font-family: Pretendard-Bold;
  font-size: 10px;
  color: white;
  line-height: 0%;
`;

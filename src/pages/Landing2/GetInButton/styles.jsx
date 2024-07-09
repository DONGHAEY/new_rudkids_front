import styled from "styled-components";

export const GetInUI = styled.div`
  background: linear-gradient(180deg, #5f6062 0%, #afafaf 100%);
  width: 85%;
  -webkit-box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.8) inset;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.8) inset;
  margin-inline: auto;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5%;
  overflow: hidden;
  border-radius: 100px;
  position: relative;
`;

export const GetInProgressUI = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #a50f16 0%, #ff1f35 100%);
  left: 0;
  z-index: 0;
`;

export const GetInWrapperUI = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  width: 100%;
  padding-block: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  gap: 3%;
  font-size: clamp(0rem, 8vw, 1.8rem);
  font-family: Poppins-Bold;
  z-index: 1;
  margin-block: 3.3%;
  margin-inline: 3.3%;
`;

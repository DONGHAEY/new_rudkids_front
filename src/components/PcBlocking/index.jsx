import styled from "styled-components";
import { isMobile } from "react-device-detect";

export const PcBlocking = () => {
  if (isMobile) {
    return null;
  }

  return (
    <PcBlockingWrapperUI>
      <TitleUI>
        Mobile Only!
        <br />
        to travel on your Hand!
      </TitleUI>
      <RequestContentUI>Please Type your phone number!</RequestContentUI>
      <PhoneNumberInputUI placeholder="your phone number" />
      <SendLinkButtonUI>Send Link</SendLinkButtonUI>
    </PcBlockingWrapperUI>
  );
};

const PcBlockingWrapperUI = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(196, 196, 196, 0.5);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
`;

const TitleUI = styled.p`
  font-size: 28px;
  text-align: center;
`;

const RequestContentUI = styled.p`
  font-size: 15px;
`;

const PhoneNumberInputUI = styled.input`
  padding: 15px;
  padding-inline: 30px;
  border: 0;
  border-radius: 30px;
  opacity: 0.5;
`;

const SendLinkButtonUI = styled.button`
  padding: 10px;
  border: 0;
  background-color: black;
  color: white;
  border-radius: 30px;
  cursor: pointer;
`;

import styled from "styled-components";

export const Login = () => {
  return (
    <LoginWrapperUI>
      <LogoImageUI src={"/images/Rudkids_Logo.png"} />
      <EngagingMentUI>Let's Check More!!</EngagingMentUI>
      <LoginButtonWrapperUI>
        <LoginButtonUI>Instagram</LoginButtonUI>
        <LoginButtonUI>Google</LoginButtonUI>
      </LoginButtonWrapperUI>
    </LoginWrapperUI>
  );
};

const LoginWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  align-items: center;
  gap: 30px;
  background: radial-gradient(
      ellipse at bottom,
      rgb(83, 173, 241) 0%,
      transparent
    ),
    radial-gradient(ellipse at top, rgb(12, 73, 187) 100%, transparent);
`;

const LogoImageUI = styled.img`
  min-width: 300px;
`;

const EngagingMentUI = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

const LoginButtonWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding-inline: 30px;
`;

const LoginButtonUI = styled.button`
  max-width: 130px;
  min-width: 90px;
  background-color: black;
  color: white;
  width: 100%;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

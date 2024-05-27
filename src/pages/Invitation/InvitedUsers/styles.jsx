import styled from "styled-components";

export const InvitedUserImgWrapperUI = styled.div`
  position: relative;
  height: 85%;
  border: 3px solid transparent;
  border-radius: 50%;

  margin-left: 15px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  background-color: #fff;

  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      50deg,
      rgba(246, 202, 69, 1) 0%,
      rgba(234, 54, 100, 1) 51%,
      rgba(193, 45, 191, 1) 100%
    );
  border-image-slice: 1;
`;

export const InvitedUserImgUI = styled.img`
  height: 100%;
  border-radius: 100%;
`;

export const InvitedUsersScrollUI = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 11px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

export const RandomOnlineSignUI = styled.div`
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: #05e800;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border: solid 1.91px white;
`;

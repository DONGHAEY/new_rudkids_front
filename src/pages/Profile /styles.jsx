import styled from "styled-components";

export const PageUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(18, 150, 240, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
`;

export const FlexUI = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap ?? "0px"};
  width: 90%;
`;

export const ViewWrapperUI = styled.div`
  width: 100%;
  display: flex;
  margin-block: 29px;
  overflow: scroll;
  flex-direction: row;
  gap: 8px;
`;

export const ViewIconBoxUI = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 16px;
  padding-block: 4px;
  border-radius: 23px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewTextBoxUI = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding-block: 9px;
  padding-inline: 20px;
  color: white;
  border-radius: 23px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;
export const ViewNameTextUI = styled.p`
  font-family: Poppins-Bold;
  font-size: 15.85px;
  line-height: 15.85px;
`;

export const ViewCntTextUI = styled.p`
  font-family: Poppins-SemiBold;
  font-size: 15.85px;
`;

export const TextAreaUI = styled.textarea`
  border-radius: 15px;
  border: solid rgba(255, 255, 255, 0.72) 1.4px;
  height: 42px;
  padding-block: 20px;
  padding-inline: 24px;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  background-color: rgba(243, 243, 243, 0.25);
  color: white;
  resize: none;
  width: 100%;
`;

export const LinkWrapperUI = styled.div`
  background-color: rgba(162, 214, 249, 1);
  display: inline;
  padding-inline: 12px;
  padding-block: 16px;
  border-radius: 16px;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  gap: 9px;
`;

export const ButtonUI = styled.button`
  background-color: rgba(255, 255, 255, 0.6);
  padding-inline: 19px;
  padding-block: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: black;
  border: none;
  border-radius: 16px;
`;

export const ButtonTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  line-height: 14px;
  color: black;
`;

export const InviteButtonSpacerUI = styled.div`
  margin-top: 100px;
`;

export const InviteButtonUI = styled.button`
  border: none;
  color: white;
  padding-inline: 20px;
  padding-block: 20px;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  max-width: 360px;
  width: 90%;
  position: fixed;
  bottom: 10px;
  margin-top: 13px;
  border-radius: 13px;
  background: linear-gradient(
    90deg,
    rgba(29, 29, 29, 1) 0%,
    rgba(47, 47, 47, 1) 100%
  );
`;

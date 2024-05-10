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
  /* background-color: gray; */
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
  color: white;
  height: 42px;
  padding-block: 20px;
  padding-inline: 24px;
  font-family: Pretendard-SemiBold;
  margin-top: 15px;
  background-color: rgba(243, 243, 243, 0.25);
`;

export const LinkWrapperUI = styled.div`
  background-color: rgba(162, 214, 249, 1);
  display: inline;
  padding-inline: 12px;
  padding-block: 16px;
  border-radius: 16px;
`;

export const LinkBoxUI = styled.div`
  padding: 17px;
  padding-block: 7px;
  background-color: rgba(235, 235, 235, 0.85);
  border-radius: 53px;
  gap: 5px;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  margin-inline: 6px;
  margin-block: 5px;
`;

export const LinkNmTextUI = styled.p`
  color: black;
  font-family: Poppins-SemiBold;
  font-size: 14px;
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
  border: none;
  border-radius: 16px;
`;

export const ButtonTxtUI = styled.p`
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  line-height: 14px;
  color: black;
`;

export const InviteButtonUI = styled.button`
  border: none;
  color: white;
  padding-inline: 20px;
  padding-block: 20px;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  width: 90%;
  margin-top: 13px;
  border-radius: 13px;
  background: linear-gradient(
    90deg,
    rgba(29, 29, 29, 1) 0%,
    rgba(47, 47, 47, 1) 100%
  );
`;

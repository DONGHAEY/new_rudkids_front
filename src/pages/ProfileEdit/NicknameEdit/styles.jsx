import styled from "styled-components";

export const PageUI = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-inline: 30px;
  height: 100%;
  overflow: scroll;
`;

export const InputWrapperUI = styled.div`
  position: relative;
  margin-top: 37px;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: black; */
`;

export const InputUI = styled.textarea`
  /* width: 100%; */
  padding: 20px;
  resize: none;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
  background-color: #f1f1f1;
  ::placeholder {
    color: #c1c1c1;
  }
  border: none;
  border-radius: 17px;
`;

export const MessageTxtUI = styled.p`
  font-family: Pretendard-Medium;
  width: 100%;
  text-align: right;
  margin-top: 10px;
  color: red;
`;

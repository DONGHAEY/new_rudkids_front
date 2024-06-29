import styled from "styled-components";

export const ScrollUI = styled.div`
  width: 100%;
  overflow: scroll;
  padding-top: 2.5%;
  margin-bottom: 5%;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 1s ease-in-out forwards;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SpacerUI = styled.div`
  margin-left: 5%;
  background: black;
`;

export const TypeBtnListUI = styled.div`
  display: flex;
  margin-left: 5%;
  gap: 3%;
`;

export const TypeButtonUI = styled.button`
  display: flex;
  padding-inline: 5%;
  border: none;
  padding-block: 2.5%;
  background-color: ${({ $selected }) =>
    $selected ? "white" : "rgba(255, 255, 255, 0.31)"};
  color: ${({ $selected }) => ($selected ? "black" : "black")};
  border-radius: 28.48px;
  font-family: Poppins-Bold;
  font-size: clamp(0rem, 4.4vw, 1.08rem);
  line-height: 100%;
`;

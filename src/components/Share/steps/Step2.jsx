import styled from "styled-components";

export const Step2 = () => {
  return (
    <Step2WrapperUI>
      <LockDescriptionBoxUI>
        <img
          style={{
            width: "13px",
          }}
          src="/assets/Images/shareComponent/lock_icon.png"
        />
        <PopinPUI
          style={{
            fontSize: "13px",
          }}
        >
          This Page is Locked
        </PopinPUI>
      </LockDescriptionBoxUI>
      <BottomBoxWrapperUI>
        <BottomBoxUI>
          <ArrowButtonUI
            children={
              <img
                style={{ width: "60%", objectFit: "cover" }}
                src="/assets/Images/shareComponent/arrow.png"
              />
            }
          />
          <img
            style={{ width: "150px" }}
            src="/assets/Images/shareComponent/friend_group_icon.png"
          />
          <BoxTitleWrapperUI>
            <PopinPUI style={{ fontSize: "25px" }}>Rudkids is</PopinPUI>
            <PopinPUI style={{ fontSize: "35px" }}>Invited Only</PopinPUI>
          </BoxTitleWrapperUI>
        </BottomBoxUI>
      </BottomBoxWrapperUI>
    </Step2WrapperUI>
  );
};

const Step2WrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const BoxTitleWrapperUI = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PopinPUI = styled.p`
  @font-face {
    font-family: "Poppins-Bold";
    src: url("/fonts/Poppins/Poppins-Bold.ttf");
  }
  font-family: "Poppins-Bold";
  margin: 0;
  font-size: 31px;
  line-height: 120%;
`;

const ArrowButtonUI = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: -20px;
  border-radius: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LockDescriptionBoxUI = styled.div`
  position: fixed;
  top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 60%);
  border-radius: 30px;
  padding: 15px;
  padding-inline: 20px;
`;

const BottomBoxWrapperUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

const BottomBoxUI = styled.div`
  background-color: rgba(255, 255, 255, 60%);
  width: 100%;
  //   height: 100%;
  max-height: 80%;
  padding-block: 50px;
  position: relative;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

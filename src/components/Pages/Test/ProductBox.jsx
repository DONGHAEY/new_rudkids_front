import styled from "styled-components";

export const ProductBox = ({ color, isRotated, name, image }) => {
  return (
    <BoxUI isRotated={isRotated}>
      <BoxBarUI backgroundColor={color ?? "#FFE818"}>
        <BoxTitleUI>{name}</BoxTitleUI>
        <BoxButtonWrapperUI>
          <BoxButtonUI backgroundColor="#E01A22" />
          <BoxButtonUI backgroundColor="#00A507" />
          <BoxButtonUI backgroundColor="#2479FF" />
        </BoxButtonWrapperUI>
      </BoxBarUI>
      <BoxContentUI>
        <BoxContentImgUI
          style={{
            zIndex: 1,
          }}
          src={image ?? "/assets/Images/List/nothing.png"}
        />
        <BoxBackgroundUI src={"/assets/Images/List/grass.png"} />
      </BoxContentUI>
    </BoxUI>
  );
};

const BoxUI = styled.div`
  width: 80%;
  height: 200px;
  background-color: #f6f6f6;
  ${({ isRotated }) =>
    isRotated ? "transform: perspective(300px) rotateX(-20deg);" : ""}
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 10px rgba(0, 0.6, 0.6, 0.6); /* 그림자 설정 */
  justify-content: space-between;
  overflow: hidden;
`;

const BoxTitleUI = styled.div`
  background-color: white;
  padding: 10px;
  padding-block: 2px;
  border-radius: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const BoxButtonWrapperUI = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
`;

const BoxButtonUI = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor ?? "#00A507"};
  width: 10px;
  height: 10px;
  border-radius: 100%;
`;

const BoxBarUI = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor ?? "black"};
  padding: 10px;
  padding-inline: 10px;
`;

const BoxContentUI = styled.div`
  height: 100%;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const BoxContentImgWrapperUI = styled.div`
  position: absolute;
  height: 80%;
`;

const BoxContentImgUI = styled.img`
  position: absolute;
  z-index: 1;
  height: 80%;
`;

const BoxBackgroundUI = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 70%;
  bottom: 0;
`;

import { Html } from "@react-three/drei";
import styled from "styled-components";

export const WatchButton = ({
  productId,
  setProductId,
  isWatching,
  setIsWatching,
}) => {
  if (!productId) return null;
  if (isWatching) return null;

  const clickHandler = () => {
    let d = productId;
    setIsWatching(true);
    setProductId(d);
  };

  return (
    <WatchButtonWrapperUI fullscreen>
      <WatchButtonUI onClick={clickHandler}>Watch</WatchButtonUI>
    </WatchButtonWrapperUI>
  );
};

const WatchButtonWrapperUI = styled(Html)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WatchButtonUI = styled.div`
  position: absolute;
  background-color: #fff628;
  color: #111111;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  margin-bottom: 20px;
  width: 40%;
  min-width: 200px;
  font-weight: bold;
  cursor: pointer;
`;

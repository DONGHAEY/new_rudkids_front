import gameBar from "./assets/game_bar.webp";
import camera from "./assets/camera.webp";
import change from "./assets/change.webp";
import { CameraImgUI, ChangeImgUI, GameBarUI } from "./styles";

export const GameBar = ({ onChange, onTake }) => {
  return (
    <GameBarUI>
      <img src={gameBar} width="100%" />
      <CameraImgUI src={camera} onClick={onTake} />
      <ChangeImgUI src={change} onClick={onChange} />
    </GameBarUI>
  );
};

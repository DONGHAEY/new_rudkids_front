import gameBar from "./assets/game_bar.webp";
import camera from "./assets/camera.webp";
import change from "./assets/change.webp";
import { CameraImgUI, ChangeImgUI, GameBarUI } from "./styles";
import clickSound from "../assets/click.mp3";

export const GameBar = ({ onChange, onTake }) => {
  const clickSnd = new Audio(clickSound);
  return (
    <GameBarUI>
      <img src={gameBar} width="100%" />
      <CameraImgUI
        src={camera}
        onClick={() => {
          clickSnd.play();
          onTake();
        }}
      />
      <ChangeImgUI
        src={change}
        onClick={() => {
          clickSnd.play();
          onChange();
        }}
      />
    </GameBarUI>
  );
};

import gameBar from "./assets/game_bar.webp";
import camera from "./assets/camera.webp";
import change from "./assets/change.webp";
import { CameraImgUI, ChangeImgUI, GameBarUI } from "./styles";
import clickMp3 from "../assets/click.mp3";
import takeAPhotoMp3 from "../assets/take_a_photo.mp3";

export const GameBar = ({ onChange, onTake }) => {
  const clickSnd = new Audio(clickMp3);
  const takeAPhoto = new Audio(takeAPhotoMp3);
  return (
    <GameBarUI>
      <img src={gameBar} width="100%" />
      <CameraImgUI
        src={camera}
        onClick={() => {
          takeAPhoto.play();
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

import { useParams } from "react-router-dom";
import { MyPetFly } from "./MyPetFly";

export const Detail = () => {
  const params = useParams();

  const componts = {
    1: <MyPetFly />,
    2: <MyPetFly />,
    3: <MyPetFly />,
  };
  /** 아이템디테일페이지(아이템GLB파일 *3D키프레임재생, 구매버튼, 토스위젯) */
  return componts[params.id];
};

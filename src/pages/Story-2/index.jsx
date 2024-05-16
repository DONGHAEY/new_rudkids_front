import { useParams } from "react-router-dom";
import { MyPetFly } from "./MyPetFly";

const Story2Page = ({ routeInfo }) => {
  const params = useParams();

  const componts = {
    ["My Pet Fly"]: <MyPetFly />,
  };

  /** 아이템디테일페이지(아이템GLB파일 *3D키프레임재생, 구매버튼, 토스위젯) */
  return componts[params[routeInfo.paramKeys[0]]];
};

export default Story2Page;

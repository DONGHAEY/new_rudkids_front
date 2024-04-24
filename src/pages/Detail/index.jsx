import { useParams } from "react-router-dom";
import { Nothing } from "./Nothing";
import Nothing2 from "./Nothing2";

const DetailPage = ({ routeInfo }) => {
  const params = useParams();

  const componts = {
    1: <Nothing />,
    2: <Nothing2 />,
    3: <Nothing />,
    4: <Nothing />,
  };
  /** 아이템디테일페이지(아이템GLB파일 *3D키프레임재생, 구매버튼, 토스위젯) */
  return componts[params[routeInfo.paramKeys[0]]];
};

export default DetailPage;

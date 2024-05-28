import { FaEye, FaHeart, FaMedal } from "react-icons/fa";
import { InfoBoxUI, RowWrapperUI } from "./styles";

const InfoList = ({ rank, totalView, followerCnt, isFollower }) => {
  return (
    <RowWrapperUI>
      {/*  */}
      <InfoBoxUI>
        <FaMedal fontSize="28px" />
        {rank}
      </InfoBoxUI>
      <InfoBoxUI>
        <FaEye fontSize="28px" />
        {totalView?.toLocaleString("ko-kr")}
      </InfoBoxUI>
      <InfoBoxUI>
        <FaHeart color={isFollower ? "red" : "black"} fontSize="28px" />
        {followerCnt?.toLocaleString("ko-kr")}
      </InfoBoxUI>
      {/*  */}
    </RowWrapperUI>
  );
};

export default InfoList;

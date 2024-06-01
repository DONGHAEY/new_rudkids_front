import { FaHeart, FaMedal } from "react-icons/fa";
import { InfoBoxUI, RowWrapperUI } from "./styles";
import eyeSrc from "../assets/eye.svg";

const InfoList = ({ rank, totalView, followerCnt, isFollower }) => {
  // const followMutation = useFollowMutation();
  // const unFollowMutation = useUnFollowMutation();

  return (
    <RowWrapperUI>
      {/*  */}
      <InfoBoxUI>
        <FaMedal fontSize="28px" />
        {rank}
      </InfoBoxUI>
      <InfoBoxUI>
        {/* <FaEye fontSize="28px" /> */}
        <img
          src={eyeSrc}
          style={{
            width: "34px",
          }}
        />
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

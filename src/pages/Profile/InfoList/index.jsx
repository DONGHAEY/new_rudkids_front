import { FaHeart, FaMedal } from "react-icons/fa";
import { InfoBoxUI, RowWrapperUI } from "./styles";
import eyeSrc from "../assets/eye.svg";
import { useNavigate } from "react-router-dom";

const InfoList = ({ rank, totalView, followerCnt, isFollower }) => {
  const navigate = useNavigate();

  const rankBtnClickHandler = () => {
    navigate("/rank");
  };

  return (
    <RowWrapperUI>
      {/*  */}
      <InfoBoxUI onClick={rankBtnClickHandler}>
        <FaMedal fontSize="28px" />
        {rank}
      </InfoBoxUI>
      <InfoBoxUI>
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

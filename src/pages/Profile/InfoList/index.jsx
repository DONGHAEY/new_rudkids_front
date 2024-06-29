import { FaHeart, FaMedal } from "react-icons/fa";
import { InfoBoxUI, RowWrapperUI } from "./styles";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const InfoList = ({ rank, totalView, followerCnt, isFollower }) => {
  const navigate = useNavigate();

  const rankBtnClickHandler = () => {
    navigate("/rank");
  };

  return (
    <RowWrapperUI>
      <InfoBoxUI onClick={rankBtnClickHandler}>
        <FaMedal fontSize="clamp(0rem, 7vw, 1.6rem)" />
        {rank}
      </InfoBoxUI>
      <InfoBoxUI>
        <Icon icon="ph:eye-fill" fontSize="clamp(0rem, 7vw, 1.6rem)" />
        {totalView?.toLocaleString("ko-kr")}
      </InfoBoxUI>
      <InfoBoxUI>
        <FaHeart
          color={isFollower ? "red" : "black"}
          fontSize="clamp(0rem, 7vw, 1.6rem"
        />
        {followerCnt?.toLocaleString("ko-kr")}
      </InfoBoxUI>
      {/*  */}
    </RowWrapperUI>
  );
};

export default InfoList;

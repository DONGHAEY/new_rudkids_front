import { useNavigate } from "react-router-dom";
import RudAlert from "../../../shared_components/RudAlert";
import CreateRudCardSrc from "./assets/CreateRudCard.svg";
import useUserQuery from "../../../queries/user/useUserQuery";
import moment from "moment/moment";
import { useMemo } from "react";

const RudCardAlert = ({ orderData }) => {
  const { data: userData } = useUserQuery();

  const canShow = useMemo(() => {
    if (!userData || !orderData) return false;
    if (orderData.payment?.status !== "completed") return false;
    if (!userData.cardImgUrl) {
      const t1 = moment(orderData?.createdAt);
      const t2 = moment(new Date());
      const minutes = moment.duration(t1.diff(t2)).asMinutes();
      if (minutes <= -180) {
        return false;
      }
    }
    return true;
  }, [userData, orderData]);

  const Children = () => {
    const navigate = useNavigate();
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBlock: "30px",
          position: "relative",
        }}
      >
        <img src={CreateRudCardSrc} width="75%" />
        <div
          onClick={() => navigate("/profile")}
          style={{
            position: "absolute",
            width: "75%",
            height: "12%",
            bottom: "12%",
          }}
        ></div>
      </div>
    );
  };

  return canShow && <RudAlert children={<Children />} />;
};

export default RudCardAlert;

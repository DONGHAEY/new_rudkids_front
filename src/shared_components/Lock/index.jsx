import { LockTxtUI, LockUI, SpacerUI } from "./styles";
import LockIcon from "./assets/lock.svg";

const Lock = ({ position = "fixed" }) => {
  return (
    <>
      <LockUI position={position}>
        <img width="23px" src={LockIcon} />
        <LockTxtUI>Locked</LockTxtUI>
      </LockUI>
      {position === "fixed" && <SpacerUI></SpacerUI>}
    </>
  );
};

export default Lock;

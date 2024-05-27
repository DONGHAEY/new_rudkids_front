import { LockTxtUI, LockUI } from "./styles";
import LockIcon from "./assets/lock.svg";

const Lock = () => {
  return (
    <LockUI>
      <img src={LockIcon} />
      <LockTxtUI>Locked</LockTxtUI>
    </LockUI>
  );
};

export default Lock;

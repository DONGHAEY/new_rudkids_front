import { ReactComponent as BlackLogo } from "./assets/black_logo.svg";
import { PaymentStatusUI, StatusTxtUI } from "./styles";

const statusKR = {
  completed: "성공",
  canceled: "취소됨",
  [null]: "실패",
};

const statusColor = {
  completed: "#038fef",
  canceled: "red",
  [null]: "black",
};

const PaymentStatus = ({ status = null }) => {
  return (
    <PaymentStatusUI>
      <BlackLogo />
      <StatusTxtUI color={statusColor[status]}>
        결제 {statusKR[status]}
      </StatusTxtUI>
    </PaymentStatusUI>
  );
};

export default PaymentStatus;

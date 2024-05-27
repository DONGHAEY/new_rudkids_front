import { ReactComponent as CheckedIcon } from "./assets/checked.svg";
import { PaymentStatusUI, StatusTxtUI } from "./styles";

const statusKR = {
  completed: "완료됨",
  canceled: "취소됨",
  [null]: "미완료",
};

const statusColor = {
  completed: "#038fef",
  canceled: "#038fef",
  [null]: "#038fef",
};

const PaymentStatus = ({ status = null }) => {
  return (
    <PaymentStatusUI>
      <CheckedIcon />
      <StatusTxtUI color={statusColor[status]}>
        결제 {statusKR[status]}
      </StatusTxtUI>
    </PaymentStatusUI>
  );
};

export default PaymentStatus;

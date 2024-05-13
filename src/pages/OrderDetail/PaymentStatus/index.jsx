import { ReactComponent as CheckedIcon } from "./assets/checked.svg";
import { PaymentStatusUI, StatusTxtUI } from "./styles";

const statusKR = {
  completed: "완료됨",
  canceled: "취소됨",
  [null]: "실패됨ㅋㅋ",
};

const statusColor = {
  completed: "#038fef",
  canceled: "red",
  [null]: "red",
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

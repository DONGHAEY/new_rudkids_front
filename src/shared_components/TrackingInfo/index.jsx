import { useAlert } from "../../hooks/useRudAlert";
import {
  TrackingInfoUI,
  RowUI,
  NameTxtUI,
  ValueTxtUI,
  FindButtonUI,
  ColUI,
} from "./styles";
import { BiSolidCopyAlt } from "react-icons/bi";

const TrackingInfo = ({ trackingNumber }) => {
  const alert = useAlert();

  return (
    <ColUI gap="18px">
      <TrackingInfoUI>
        <RowUI gap="16px">
          <RowUI gap="13px">
            <NameTxtUI>송장번호</NameTxtUI>
            <ValueTxtUI>{trackingNumber}</ValueTxtUI>
          </RowUI>
          <BiSolidCopyAlt
            onClick={() => {
              var tempElem = document.createElement("textarea");
              tempElem.value = trackingNumber;
              document.body.appendChild(tempElem);
              tempElem.select();
              document.execCommand("copy");
              document.body.removeChild(tempElem);
              alert("복사됨.");
            }}
          />
        </RowUI>
        <RowUI gap="16px">
          <NameTxtUI>배송업체</NameTxtUI>
          <ValueTxtUI>CJ대한통운</ValueTxtUI>
        </RowUI>
      </TrackingInfoUI>
      <FindButtonUI
        onClick={() => {
          window.open("https://대한통운.com/" + `${trackingNumber}`);
        }}
      >
        배송조회 바로가기
      </FindButtonUI>
    </ColUI>
  );
};

export default TrackingInfo;

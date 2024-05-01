import { useEffect, useState } from "react";
import {
  useSendPhoneAuthKeyMutation,
  useSetPhoneNumberMutation,
} from "../../../queries/user";

const PhoneAuthInput = ({ ref, value, onChange }) => {
  const [isAuthing, setIsAuthing] = useState(false);
  const [authKey, setAuthKey] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendPhoneAuthKeyMutation = useSendPhoneAuthKeyMutation();
  const setPhoneNumberMutation = useSetPhoneNumberMutation();

  const onAuthStartBtnClick = async () => {
    await sendPhoneAuthKeyMutation.mutateAsync(phoneNumber, {
      onSuccess: () => setIsAuthing(true),
      onError: () => setIsAuthing(false),
    });
  };

  const onAuthBtnClick = async () => {
    await setPhoneNumberMutation.mutateAsync(
      {
        phoneNumber,
        authKey,
      },
      {
        onSuccess: () => {
          onChange(phoneNumber);
        },
        onError: () => {},
      }
    );
  };

  useEffect(() => {
    if (value) {
      setIsAuthing(false);
      setAuthKey("");
    }
  }, [value]);

  return (
    <>
      {!value && (
        <div>
          <input
            onChange={(e) => {
              if (isAuthing) return;
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
          />
          {isAuthing && (
            <div>
              <input
                value={authKey}
                onChange={(e) => setAuthKey(e.target.value)}
              />
              <button onClick={onAuthBtnClick}>인증</button>
            </div>
          )}
          {!isAuthing && (
            <button onClick={onAuthStartBtnClick}>인증문자보내기</button>
          )}
        </div>
      )}
      {value && (
        <div
          style={{
            backgroundColor: "gainsboro",
            padding: "3px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p>{value}</p>
          <p
            onClick={() => {
              onChange("");
            }}
          >
            x
          </p>
        </div>
      )}
      <input
        ref={ref}
        style={{
          border: "none",
          height: "0px",
          width: "0px",
        }}
      />
    </>
  );
};

export default PhoneAuthInput;

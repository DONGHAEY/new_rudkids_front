import { forwardRef } from "react";
import { GetInProgressUI, GetInUI, GetInWrapperUI } from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const GetInButton = forwardRef(({ onClick, progress }, ref) => {
  return (
    <GetInUI ref={ref} onClick={onClick}>
      <GetInProgressUI
        style={{
          width: `${progress}%`,
        }}
      />
      <GetInWrapperUI>
        <Icon fontSize="120%" icon="bxs:log-in" />
        <p>GET IN</p>
      </GetInWrapperUI>
    </GetInUI>
  );
});

export default GetInButton;

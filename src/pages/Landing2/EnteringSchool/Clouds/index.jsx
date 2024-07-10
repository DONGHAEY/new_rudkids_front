import { CloudWrapperUI, CloudsWrapperUI } from "./styles";
import cloud from "./assets/cloud.webp";
import { forwardRef } from "react";

const Clouds = forwardRef((props, ref = null) => {
  return (
    <CloudsWrapperUI ref={ref}>
      {/*  */}
      <CloudWrapperUI marginTop="10%">
        <img src={cloud} width="120%" />
      </CloudWrapperUI>
      <CloudWrapperUI>
        <img src={cloud} width="140%" />
      </CloudWrapperUI>
      <CloudWrapperUI marginTop="5%">
        <img src={cloud} width="120%" />
      </CloudWrapperUI>
    </CloudsWrapperUI>
  );
});

export default Clouds;

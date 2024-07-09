import { CloudWrapperUI, CloudsWrapperUI } from "./styles";
import cloud from "./assets/cloud.webp";

const Clouds = () => {
  return (
    <CloudsWrapperUI>
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
};

export default Clouds;

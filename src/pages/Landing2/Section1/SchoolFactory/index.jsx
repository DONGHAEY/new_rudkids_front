import school from "./assets/school.webp";
import axisPipe from "./assets/axis_pipes.webp";
import { AxisPipeUI, SchoolFactoryUI, WrapperUI } from "./styles";
import Students from "./Student";

const SchoolFactory = () => {
  return (
    <SchoolFactoryUI>
      <img src={school} width="100%" />
      <WrapperUI>
        <AxisPipeUI src={axisPipe} />
        <Students />
      </WrapperUI>
    </SchoolFactoryUI>
  );
};

export default SchoolFactory;

import { SectionUI } from "./styles";
import SchoolFactory from "./SchoolFactory";
import SchoolSign from "./SchoolSign";

const Section1 = () => {
  return (
    <SectionUI>
      <SchoolFactory />
      <SchoolSign />
    </SectionUI>
  );
};

export default Section1;

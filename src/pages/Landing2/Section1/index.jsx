import { BeetweenUI, ColliderUI, SectionUI, TeacherImgUI } from "./styles";
import SchoolFactory from "./SchoolFactory";
import SchoolSign from "./SchoolSign";
import collider from "./assets/collider.webp";
import teacher from "./assets/teacher.webp";

const Section1 = () => {
  return (
    <SectionUI>
      <SchoolFactory />
      <BeetweenUI>
        <TeacherImgUI src={teacher} />
        <SchoolSign />
      </BeetweenUI>
      <ColliderUI src={collider} />
    </SectionUI>
  );
};

export default Section1;

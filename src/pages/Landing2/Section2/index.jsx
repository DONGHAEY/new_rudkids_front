import { SectionUI, TitleUI } from "./styles";
import titleImg from "./assets/title.webp";
import Persona from "./Persona";

const Section2 = () => {
  return (
    <SectionUI>
      {/*  */}
      <TitleUI src={titleImg} />
      <Persona />
      {/*  */}
    </SectionUI>
  );
};

export default Section2;

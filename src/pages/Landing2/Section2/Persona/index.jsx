import {
  ArrowsSectionUI,
  FaceWrapperUI,
  FromTxtUI,
  IntroduceSectionUI,
  PersonaFaceUI,
  PersonaNameUI,
  PersonaUI,
  RudkidsSignUI,
  SayBoxUI,
} from "./styles";

import leftArrow from "./assets/leftbutton@2x.webp";
import rightArrow from "./assets/rightbutton@2x.webp";

import steveJobs from "./assets/stevejobs_1@2x.webp";
import albertEinstein from "./assets/einstein_1@2x.webp";
import kurtCobain from "./assets/kurt_1@2x.webp";
import oasis from "./assets/oasis_1@2x.webp";
import elonMusk from "./assets/elon_1@2x.webp";
import { useState } from "react";

export const personaList = [
  {
    name: "Steve Jobs",
    img: steveJobs,
    from: "1995. SAN FRANCISCO. CA. USA",
    message: "I hate it when people confuse\neducation with intelligence.",
  },
  {
    name: "Albert Einstein",
    img: albertEinstein,
    from: "1879. Wurttemberg. GERMAN",
    message:
      "Common sense is the collection of\nprejudices acquired by age eighteen.",
  },
  {
    name: "Kurt Cobain",
    img: kurtCobain,
    from: "1967 Aberdeen. WA. USA",
    message: "I’d rather be hated for who I am\nthan be loved for who I’m not.",
  },
  {
    name: "Oasis",
    img: oasis,
    from: "1967 Aberdeen. WA. USA",
    message: "Buy fucking T-shirt and a poster.",
  },
  {
    name: "ElonMusk",
    img: elonMusk,
    from: "1971. Dretoria. South Africa",
    message: "I hate it when people confuse\neducation with intelligence.",
  },
];

const Persona = () => {
  const [personaIdx, setPersonaIdx] = useState(0);
  const personaInfo = personaList[personaIdx];

  const rightBtnClickHandler = () => {
    setPersonaIdx((personaIdx + 1) % personaList.length);
  };

  const leftBtnClickHandler = () => {
    setPersonaIdx(personaIdx - 1 < 0 ? personaList.length - 1 : personaIdx - 1);
  };

  return (
    <PersonaUI>
      <FaceWrapperUI>
        <RudkidsSignUI>
          RUDE
          <br />
          KIDS
        </RudkidsSignUI>
        <PersonaFaceUI src={personaInfo.img} />
        <PersonaNameUI>{personaInfo.name}</PersonaNameUI>
      </FaceWrapperUI>
      <IntroduceSectionUI>
        <FromTxtUI>{personaInfo.from}</FromTxtUI>
        <SayBoxUI>"{personaInfo.message}"</SayBoxUI>
      </IntroduceSectionUI>
      <ArrowsSectionUI>
        <img src={leftArrow} width="18%" onClick={leftBtnClickHandler} />
        <img src={rightArrow} width="18%" onClick={rightBtnClickHandler} />
      </ArrowsSectionUI>
    </PersonaUI>
  );
};

export default Persona;

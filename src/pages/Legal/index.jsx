import Header from "../../shared_components/Header";
import Footer from "../../shared_components/Footer";
import {
  ButtonListUI,
  ContentsTitleUI,
  H1,
  PageUI,
  TextWrapperUI,
} from "./styles";
import { useState } from "react";
import { WindowButtonUI } from "../../shared_components/RudWindow/shared_styles";
import { legalContents } from "./legalContents";

const LeagalPage = () => {
  //
  const [contentsIdx, setContentsIdx] = useState(0);
  const contentsName = legalContents[contentsIdx].name;
  const contents = legalContents[contentsIdx].contents;

  return (
    <PageUI>
      <Header isFixed={true} />
      <ButtonListUI>
        {legalContents.map((legalContent, idx) => {
          const selected = idx === contentsIdx;
          return (
            <WindowButtonUI
              background={selected ? "rgba(200, 50, 50)" : null}
              border={selected ? "rgba(255, 0, 0)" : null}
              onClick={() => setContentsIdx(idx)}
              key={idx}
            >
              {legalContent.name}
            </WindowButtonUI>
          );
        })}
      </ButtonListUI>
      <ContentsTitleUI>{contentsName}</ContentsTitleUI>
      <TextWrapperUI
        dangerouslySetInnerHTML={{
          __html: contents,
        }}
      ></TextWrapperUI>
      <Footer />
    </PageUI>
  );
};

export default LeagalPage;

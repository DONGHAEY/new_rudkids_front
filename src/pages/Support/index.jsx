import { useState } from "react";
import Header from "../../shared_components/Header";
import QnaForm from "./QnaForm";
import { BtnListUI, PageUI } from "./styles";
import { WindowButtonUI } from "../../shared_components/RudWindow/shared_styles";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import Faq from "./Faq";

const componentInfos = [
  {
    name: "FAQ",
    component: <Faq />,
  },
  {
    name: "QNA",
    component: <QnaForm />,
  },
];

export const SupportPage = () => {
  const [componentIdx, setComponentIdx] = useState(0);

  useBodyBackground("#1a94d9");

  return (
    <PageUI>
      <Header />
      <BtnListUI>
        {componentInfos?.map((componentInfo, idx) => {
          const selected = componentIdx === idx;
          return (
            <WindowButtonUI
              background={selected ? "rgba(200, 50, 50)" : null}
              border={selected ? "rgba(255, 0, 0)" : null}
              onClick={() => setComponentIdx(idx)}
              key={idx}
            >
              {componentInfo.name}
            </WindowButtonUI>
          );
        })}
      </BtnListUI>
      {componentInfos[componentIdx].component}
    </PageUI>
  );
};

import Header from "../../shared_components/Header";
import QnaForm from "./QnaForm";
import { BtnListUI, PageUI, SectionUI } from "./styles";
import { WindowButtonUI } from "../../shared_components/RudWindow/shared_styles";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import Faq from "./Faq";
import Footer from "../../shared_components/Footer";
import { useNavigate, useSearchParams } from "react-router-dom";

const componentInfos = {
  faq: <Faq />,
  qna: <QnaForm />,
};

const SupportPage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab") ?? "faq";

  const navigate = useNavigate();

  useBodyBackground("#0027F1");

  return (
    <PageUI>
      <SectionUI>
        <Header />
        <BtnListUI>
          {Object.keys(componentInfos)?.map((key, idx) => {
            const selected = key === tab;
            return (
              <WindowButtonUI
                background={selected ? "rgba(200, 50, 50)" : null}
                border={selected ? "rgba(255, 0, 0)" : null}
                onClick={() => {
                  navigate(`?tab=${key}`);
                }}
                key={idx}
              >
                {key}
              </WindowButtonUI>
            );
          })}
        </BtnListUI>
        {componentInfos[tab]}
      </SectionUI>
      <Footer />
    </PageUI>
  );
};

export default SupportPage;

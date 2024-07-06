import Header from "../../shared_components/Header";
import Footer from "../../shared_components/Footer";
import { ButtonListUI, ContentsTitleUI, PageUI, TextWrapperUI } from "./styles";
import { WindowButtonUI } from "../../shared_components/RudWindow/shared_styles";
import { legalContents } from "./legalContents";
import { useNavigate, useSearchParams } from "react-router-dom";

const LeagalPage = () => {
  //

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const tab = searchParams.get("tab") ?? "agreement";

  const legalContent = legalContents?.find(
    (legalContent) => legalContent.name === tab
  );

  const contentsName = legalContent.name;
  const contents = legalContent.contents;

  return (
    <PageUI>
      <Header isFixed={true} color="black" />
      <ButtonListUI>
        {legalContents.map((legalContent, idx) => {
          const selected = legalContent.name === tab;
          return (
            <WindowButtonUI
              background={selected ? "rgba(200, 50, 50)" : null}
              border={selected ? "rgba(255, 0, 0)" : null}
              onClick={() => navigate(`?tab=${legalContent.name}`)}
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

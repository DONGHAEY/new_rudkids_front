import ModelDragger from "./ModelDragger";
import ActionBar from "../../../components/ActionBar";
import Header from "../../../components/Header";
import {
  PageUI,
  ContentSectionUI,
  ProductNameTextUI,
  ProductPriceTextUI,
  FlexWrapperUI,
  ComponentListUI,
  ComponentUI,
} from "./styles";

const Nothing2 = () => {
  return (
    <PageUI>
      <Header $backgroundColor="white" />
      <FlexWrapperUI>
        <ModelDragger />
        <ContentSectionUI>
          <ProductNameTextUI>Nothing</ProductNameTextUI>
          <ProductPriceTextUI>₩ 139,000</ProductPriceTextUI>
        </ContentSectionUI>
        <ComponentListUI>
          <ComponentUI />
          <ComponentUI />
          <ComponentUI />
        </ComponentListUI>
      </FlexWrapperUI>
      <ActionBar />
    </PageUI>
  );
};

export default Nothing2;

import ModelDragger from "./ModelDragger";
import Header from "../../../components/Header";
import {
  PageUI,
  ContentSectionUI,
  ProductNameTextUI,
  ProductPriceTextUI,
} from "./styles";

const Nothing2 = () => {
  return (
    <PageUI>
      <Header />
      <ModelDragger />
      <ContentSectionUI>
        <ProductNameTextUI>Nothing</ProductNameTextUI>
        <ProductPriceTextUI>₩ 139,000</ProductPriceTextUI>
      </ContentSectionUI>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "end",
          width: "80%",
          height: "150px",
          overflow: "scroll",
        }}
      >
        <div
          style={{
            backgroundColor: "#EDEDED",
            height: "140px",
            margin: "10px",
            aspectRatio: "1/1",
          }}
        >
          <img />
        </div>
        <div
          style={{
            backgroundColor: "#EDEDED",
            height: "140px",
            margin: "10px",
            aspectRatio: "1/1",
          }}
        >
          <img />
        </div>
        <div
          style={{
            backgroundColor: "#EDEDED",
            height: "140px",
            margin: "10px",
            aspectRatio: "1/1",
          }}
        >
          <img />
        </div>
      </div>
    </PageUI>
  );
};

export default Nothing2;

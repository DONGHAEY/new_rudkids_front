import ModelDragger from "./ModelDragger";
import ActionBar from "../../components/ActionBar";
import Header from "../../components/Header";
import {
  PageUI,
  ContentSectionUI,
  ProductNameTextUI,
  ProductPriceTextUI,
  FlexWrapperUI,
  ComponentListUI,
} from "./styles";
import { useParams } from "react-router-dom";
import { useProductQuery } from "../../queries/product";
import { useState } from "react";
import ProductComponent from "./ProductComponent";

const DetailPage = ({ routeInfo }) => {
  const params = useParams();
  const productName = params[routeInfo.paramKeys[0]];
  const [selectedModelIdx, setSelectedModelIdx] = useState(0);

  const { data: productData, isLoading: productDataLoading } =
    useProductQuery(productName);

  if (productDataLoading || !productData) {
    return null;
  }

  const productPrice = productData?.price?.toLocaleString("ko-KR");
  const productComponents = [
    { imageUrl: productData.imageUrl, modelUrl: productData.modelUrl },
    ...productData?.components.map((productComponentData) => ({
      imageUrl: productComponentData.imageUrl,
      modelUrl: productComponentData.modelUrl,
    })),
  ];

  return (
    <PageUI>
      <Header $backgroundColor="#ffffff" />
      <FlexWrapperUI>
        <ModelDragger
          modelUrls={productComponents?.map((_) => _.modelUrl)}
          modelIdx={selectedModelIdx}
        />
        <ContentSectionUI>
          <ProductNameTextUI>{productName}</ProductNameTextUI>
          <ProductPriceTextUI>₩ {productPrice}</ProductPriceTextUI>
        </ContentSectionUI>
        <ComponentListUI>
          {productComponents?.map((_, idx) => {
            return (
              <ProductComponent
                key={idx}
                selected={idx === selectedModelIdx}
                onClick={() => setSelectedModelIdx(idx)}
                imageUrl={_.imageUrl}
              />
            );
          })}
        </ComponentListUI>
      </FlexWrapperUI>
      <ActionBar />
    </PageUI>
  );
};

export default DetailPage;

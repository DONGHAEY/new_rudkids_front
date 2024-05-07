import ModelDragger from "./ModelDragger";
import ActionBar from "./ActionBar";
import Header from "../../shared/Header";
import {
  PageUI,
  ContentSectionUI,
  ProductNameTextUI,
  ProductPriceTextUI,
  FlexWrapperUI,
  ComponentListUI,
  ModelDescriptionUI,
  ModelDescriptionTextUI,
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
    {
      name: productData.components?.length === 0 ? productData.name : "package",
      description: productData.description,
      imageUrl: productData.imageUrl,
      modelUrl: productData.modelUrl,
    },
    ...productData?.components.map((_) => ({
      name: _.name,
      description: _.description,
      imageUrl: _.imageUrl,
      modelUrl: _.modelUrl,
    })),
  ];

  return (
    <PageUI>
      <Header $backgroundColor="none" />
      <FlexWrapperUI>
        <ModelDragger
          modelName={productComponents[selectedModelIdx]?.name}
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
                name={_.name}
              />
            );
          })}
        </ComponentListUI>
        <ModelDescriptionUI>
          {/* <ModelDescriptionTextUI>설명</ModelDescriptionTextUI> */}
          <ModelDescriptionTextUI>
            Tmi : {productComponents[selectedModelIdx]?.description}
          </ModelDescriptionTextUI>
        </ModelDescriptionUI>
      </FlexWrapperUI>
      <ActionBar productId={productData?.id} />
    </PageUI>
  );
};

export default DetailPage;

import ModelDragger from "./ModelDragger";
import ActionBar from "./ActionBar";
import Header from "../../shared_components/Header";
import {
  PageUI,
  ContentSectionUI,
  ProductNameTextUI,
  ProductPriceTextUI,
  FlexWrapperUI,
  ComponentListUI,
  ModelDescriptionUI,
  ModelDescriptionTextUI,
  HelpMessageTextUI,
  PackageExplainUI,
  InfoRowUI,
} from "./styles";
import { useParams } from "react-router-dom";
import useProductDetailQuery from "../../queries/product/useProductDetailQuery";
import { useState } from "react";
import ProductComponent from "./ProductComponent";
import { CgArrowDown } from "react-icons/cg";

const ProductDetailPage = ({ routeInfo }) => {
  const params = useParams();
  const productName = params[routeInfo.paramKeys[0]];
  const [selectedModelIdx, setSelectedModelIdx] = useState(0);

  const { data: productData, isLoading: productDataLoading } =
    useProductDetailQuery(productName);

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
          <InfoRowUI>
            <ProductNameTextUI>{productName}</ProductNameTextUI>
            {productData?.isPackage && (
              <PackageExplainUI>‼️ Package</PackageExplainUI>
            )}
          </InfoRowUI>
          <ProductPriceTextUI>₩ {productPrice}</ProductPriceTextUI>
        </ContentSectionUI>
        <HelpMessageTextUI>
          <CgArrowDown /> Click on the object! <CgArrowDown />
        </HelpMessageTextUI>
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
        {/* <ModelDescriptionUI>
          <ModelDescriptionTextUI>
            Tmi : {productComponents[selectedModelIdx]?.description}
          </ModelDescriptionTextUI>
        </ModelDescriptionUI> */}
      </FlexWrapperUI>
      <ActionBar productData={productData} />
    </PageUI>
  );
};

export default ProductDetailPage;

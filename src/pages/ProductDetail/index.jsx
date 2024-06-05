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
  DetailImgListUI,
} from "./styles";
import { useParams } from "react-router-dom";
import useProductDetailQuery from "../../queries/product/useProductDetailQuery";
import { useMemo, useState } from "react";
import ProductComponent from "./ProductComponent";
import { CgArrowDown } from "react-icons/cg";
import Loader from "../../shared_components/Loader";
import Footer from "../../shared_components/Footer";

const ProductDetailPage = ({ routeInfo }) => {
  const params = useParams();
  const productName = params[routeInfo.paramKeys[0]];
  const [selectedModelIdx, setSelectedModelIdx] = useState(0);

  const { data: productData, isLoading: productDataLoading } =
    useProductDetailQuery(productName);

  const productPrice = productData?.price?.toLocaleString("ko-KR");
  const detailImageUrls = useMemo(() => {
    if (productData?.detailIimageUrls) {
      return JSON.parse(productData?.detailImageUrls);
    }
    return [];
  }, [productData]);

  const productComponents = productData?.components;

  return (
    <PageUI>
      <Header $backgroundColor="none" />
      <FlexWrapperUI>
        <ModelDragger
          modelName={productComponents?.[selectedModelIdx]?.name}
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
        <ModelDescriptionUI>
          <ModelDescriptionTextUI>
            {productData?.description}
          </ModelDescriptionTextUI>
        </ModelDescriptionUI>
        <DetailImgListUI>
          {detailImageUrls?.map((detailIimageUrl, key) => {
            return <img key={key} width="100%" src={detailIimageUrl} />;
          })}
        </DetailImgListUI>
      </FlexWrapperUI>
      <ActionBar productData={productData} />
      {productDataLoading && <Loader delayMs={500} />}
    </PageUI>
  );
};

export default ProductDetailPage;

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
  PackageExplainUI,
  InfoRowUI,
  DetailImgListUI,
} from "./styles";
import { useParams } from "react-router-dom";
import useProductDetailQuery from "../../queries/product/useProductDetailQuery";
import { useMemo, useState } from "react";
import ProductComponent from "./ProductComponent";
import Loader from "../../shared_components/Loader";
/** */
import glb1Src from "./assets/1.glb";
import glb2Src from "./assets/2.glb";
import img1Src from "./assets/1.jpg";
import img2Src from "./assets/2.jpg";

const ProductDetailPage = ({ routeInfo }) => {
  const params = useParams();
  const productName = params[routeInfo.paramKeys[0]];
  const [selectedModelIdx, setSelectedModelIdx] = useState(0);

  const { data: productData, isLoading: productDataLoading } =
    useProductDetailQuery(productName);

  const productPrice = productData?.price?.toLocaleString("ko-KR");

  const detailImageUrls = useMemo(() => {
    if (!productData?.detailImageUrls) return [];
    return JSON.parse(productData?.detailImageUrls ?? []);
  }, [productData]);

  const productComponents = useMemo(() => {
    if (!productData) return [];
    return [
      ...productData?.components,
      {
        name: "License",
        description: "",
        imageUrl: img1Src,
        modelUrl: glb1Src,
      },
      {
        name: "Tickes",
        description: "",
        imageUrl: img2Src,
        modelUrl: glb2Src,
      },
    ];
  }, [productData]);

  if (productDataLoading) {
    return <Loader />;
  }

  return (
    <PageUI>
      <Header $backgroundColor="none" />
      <FlexWrapperUI>
        <ModelDragger
          modelName={productComponents?.[selectedModelIdx]?.name}
          modelUrls={productComponents?.map((_) => _.modelUrl)}
          modelIdx={selectedModelIdx}
          setModelIdx={setSelectedModelIdx}
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
      </FlexWrapperUI>
      <DetailImgListUI>
        {detailImageUrls?.map((detailIimageUrl, key) => {
          return <img key={key} width="100%" src={detailIimageUrl} />;
        })}
      </DetailImgListUI>
      <ActionBar productData={productData} />
    </PageUI>
  );
};

export default ProductDetailPage;

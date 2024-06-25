import ModelDragger from "../../shared_components/ModelDragger";
import ModelSelect from "../../shared_components/ModelSelect";
import ActionBar from "./ActionBar";
import Header from "../../shared_components/Header";
import {
  PageUI,
  ContentSectionUI,
  ProductNameTextUI,
  ProductPriceTextUI,
  FlexWrapperUI,
  ModelDescriptionUI,
  ModelDescriptionTextUI,
  PackageExplainUI,
  InfoRowUI,
  DetailImgListUI,
} from "./styles";
import { useParams } from "react-router-dom";
import useProductDetailQuery from "../../queries/product/useProductDetailQuery";
import { Suspense, useEffect, useMemo, useState } from "react";
import img1Src from "./assets/1.jpg";
import img2Src from "./assets/2.jpg";
import {
  trackPageView,
  useTrackReadPageContents,
} from "../../shared_analytics";
import Loader from "../../shared_components/Loader";

const ProductDetailPage = ({ routeInfo }) => {
  const params = useParams();
  const productName = params[routeInfo.paramKeys[0]];
  const [selectedIdx, setSelectedIdx] = useState(0);

  const { data: productData, isLoading: productDataLoading } =
    useProductDetailQuery(productName);

  const productPrice = productData?.price?.toLocaleString("ko-KR");

  const detailImageUrls = useMemo(() => {
    if (!productData?.detailImageUrls) return [];
    return JSON.parse(productData?.detailImageUrls ?? []);
  }, [productData]);

  const models = useMemo(() => {
    if (!productData) return [];
    return [
      ...productData?.components,
      {
        name: "License",
        description: "",
        imageUrl: img1Src,
        modelUrl: "/Models/license.glb",
      },
      {
        name: "Tickes",
        description: "",
        imageUrl: img2Src,
        modelUrl: "/Models/ticket.glb",
      },
    ];
  }, [productData]);

  useEffect(() => {
    const { name, price, id: product_id, type } = productData;
    trackPageView("product-detail", {
      name,
      product_id,
      type,
      price,
    });
  }, [productData]);
  useTrackReadPageContents("product-detail");

  return (
    <Suspense fallback={<Loader />}>
      <PageUI>
        <Header $backgroundColor="none" />
        <FlexWrapperUI>
          <ModelDragger
            modelName={models?.[selectedIdx]?.name}
            modelUrls={models?.map((_) => _.modelUrl)}
            modelIdx={selectedIdx}
            setModelIdx={setSelectedIdx}
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

          <div
            style={{
              height: "5%",
              width: "100%",
            }}
          />
          <ModelSelect
            models={models}
            selectedIdx={selectedIdx}
            setSelectedIdx={setSelectedIdx}
          />
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
    </Suspense>
  );
};

export default ProductDetailPage;

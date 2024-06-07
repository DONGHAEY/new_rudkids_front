import {
  BlankCollectionBoxUI,
  CollectionBoxUI,
  CollectionImgUI,
  GoOrderBtnUI,
  ListUI,
  PageUI,
  StampImgUI,
  TitleTxtUI,
  TitleWrapperUI,
} from "./styles";
import stampSrc from "./assets/stamp.svg";
import { useNavigate, useParams } from "react-router-dom";
import useCollectionQuery from "../../queries/collection/userCollectionQuery";
import { Icon } from "@iconify/react/dist/iconify.js";
import useUserQuery from "../../queries/user/useUserQuery";
import Header from "../../shared_components/Header";
import Loader from "../../shared_components/Loader";

const CollectionPage = () => {
  const { data: userData } = useUserQuery();
  const params = useParams();
  const userId = params["user_id"] ?? userData?.id;

  const navigate = useNavigate();
  const { data: collectionData, isLoading } = useCollectionQuery(userId);

  const collectedProducts = collectionData?.collectedProducts ?? [];
  const collectorName = collectionData?.collectorName ?? "";

  const min표시개수 = 10;
  const blank표시개수 =
    min표시개수 - collectedProducts?.length < 0
      ? 0
      : min표시개수 - collectedProducts?.length ?? 0;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageUI>
      <Header isFixed />
      <TitleWrapperUI>
        <TitleTxtUI>{collectorName}'s</TitleTxtUI>
        <TitleTxtUI>Collection</TitleTxtUI>
      </TitleWrapperUI>
      <ListUI>
        {collectionData?.collectedProducts?.map((orderProduct, idx) => {
          const randomTop = Math.floor(Math.random() * 60);
          const randomLeft = Math.floor(Math.random() * 60);
          const randomAngle = Math.floor(Math.random() * 360);

          return (
            <CollectionBoxUI key={idx}>
              <CollectionImgUI src={orderProduct.thumnail} />
              <p>{orderProduct.name}</p>
              <StampImgUI
                top={randomTop}
                left={randomLeft}
                rotateZ={randomAngle}
                src={stampSrc}
              />
            </CollectionBoxUI>
          );
        })}
        {new Array(blank표시개수).fill("").map((_, idx) => (
          <BlankCollectionBoxUI>?</BlankCollectionBoxUI>
        ))}
      </ListUI>
      {userId === userData?.id && (
        <GoOrderBtnUI onClick={() => navigate("/order-list")}>
          <Icon
            icon="lets-icons:order"
            fontSize="18.13px"
            style={{
              textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 2px",
            }}
          />
          <p>주문 내역</p>
        </GoOrderBtnUI>
      )}
    </PageUI>
  );
};

export default CollectionPage;

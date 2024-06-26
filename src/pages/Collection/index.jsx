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
import stampSrc from "./assets/stamp.webp";
import { useNavigate, useParams } from "react-router-dom";
import useCollectionQuery from "../../queries/collection/userCollectionQuery";
import { Icon } from "@iconify/react/dist/iconify.js";
import useUserQuery from "../../queries/user/useUserQuery";
import Header from "../../shared_components/Header";
import RudImage from "../../shared_components/RudImage";
import { useBodyBackground } from "../../hooks/useBodyBackground";

const CollectionPage = () => {
  const params = useParams();
  const userParamId = params["user_id"] ?? null;

  const navigate = useNavigate();
  const { data: userData } = useUserQuery(userParamId);
  const { data: collectedProducts = [] } = useCollectionQuery(
    userData?.id ?? undefined
  );

  const min표시개수 = 8;
  const blank표시개수 =
    min표시개수 - collectedProducts?.length < 0
      ? 0
      : min표시개수 - collectedProducts?.length ?? 0;

  useBodyBackground("#0027F1");

  return (
    <PageUI>
      <Header isFixed />
      <TitleWrapperUI>
        <TitleTxtUI>{userData?.nickname}'s</TitleTxtUI>
        <TitleTxtUI>Collection</TitleTxtUI>
      </TitleWrapperUI>
      <ListUI>
        {collectedProducts?.map((orderProduct, idx) => {
          const randomTop = Math.floor(Math.random() * 60);
          const randomLeft = Math.floor(Math.random() * 60);
          const randomAngle = Math.floor(Math.random() * 360);
          return (
            <CollectionBoxUI key={idx}>
              <RudImage ImgUI={CollectionImgUI} src={orderProduct.thumnail} />
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
      {!userParamId && userData && (
        <GoOrderBtnUI onClick={() => navigate("/order-list")}>
          <Icon icon="lets-icons:order" />
          <p>주문 내역</p>
        </GoOrderBtnUI>
      )}
    </PageUI>
  );
};

export default CollectionPage;

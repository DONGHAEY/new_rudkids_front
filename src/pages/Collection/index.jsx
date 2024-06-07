import {
  BlankCollectionBoxUI,
  CollectionBoxUI,
  CollectionImgUI,
  GoOrderBtnUI,
  ListUI,
  LogoImgUI,
  PageUI,
  StampImgUI,
  TitleTxtUI,
  TitleWrapperUI,
} from "./styles";
import LogoSrc from "./assets/logo.png";
import QuestionSrc from "./assets/questionMark.svg";
import stampSrc from "./assets/stamp.svg";
import { useNavigate, useParams } from "react-router-dom";
import useCollectionQuery from "../../queries/collection/userCollectionQuery";
import { RudkidsGradients } from "../../global";
import { Icon } from "@iconify/react/dist/iconify.js";
import useUserQuery from "../../queries/user/useUserQuery";

const CollectionPage = () => {
  const { data: userData } = useUserQuery();
  const params = useParams();
  const userId = params["user_id"];

  const { data = [] } = useCollectionQuery(userId);

  const min표시개수 = 10;
  const blank표시개수 =
    min표시개수 - data?.length < 0 ? 0 : min표시개수 - data?.length;

  const navigate = useNavigate();

  return (
    <PageUI>
      <LogoImgUI src={LogoSrc} />
      <TitleWrapperUI>
        <TitleTxtUI>NickName's</TitleTxtUI>
        <TitleTxtUI>Collection</TitleTxtUI>
      </TitleWrapperUI>
      <ListUI>
        {data?.map((orderProduct, idx) => {
          const randomTop = Math.floor(Math.random() * 60);
          const randomLeft = Math.floor(Math.random() * 60);
          const randomAngle = Math.floor(Math.random() * 360);
          const background = RudkidsGradients[idx % RudkidsGradients.length];

          return (
            <CollectionBoxUI key={idx} background={background}>
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
          <BlankCollectionBoxUI>
            <img src={QuestionSrc} width="60%" />
          </BlankCollectionBoxUI>
        ))}
      </ListUI>
      {userData?.id === userId && (
        <GoOrderBtnUI onClick={() => navigate("/order-list")}>
          <Icon icon="lets-icons:order" /> <p>주문 내역</p>
        </GoOrderBtnUI>
      )}
    </PageUI>
  );
};

export default CollectionPage;

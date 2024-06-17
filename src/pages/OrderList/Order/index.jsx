import { Icon } from "@iconify/react/dist/iconify.js";
import {
  DateTxtUI,
  HeadUI,
  ListOfOrderUI,
  MoreTxtUI,
  ProductImgUI,
  ProductImgWrapperUI,
  ProductListUI,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  //
  const navigate = useNavigate();
  const maxProductsLength = 3;
  const notAppeared = order?.orderProducts?.length - maxProductsLength;

  return (
    <ListOfOrderUI
      onClick={() => {
        navigate(`/order/${order.id}`);
      }}
    >
      <HeadUI>
        <DateTxtUI>
          {order?.createdAt?.substring(0, 10)?.replaceAll("-", ".")}
        </DateTxtUI>
        <Icon icon="mingcute:right-line" fontSize="24px" />
      </HeadUI>
      <ProductListUI>
        {order?.orderProducts?.map((orderProduct, idx) => {
          if (idx >= maxProductsLength) return null;
          return (
            <ProductImgWrapperUI>
              <ProductImgUI src={orderProduct.thumnail} />
            </ProductImgWrapperUI>
          );
        })}
        {notAppeared > 0 && <MoreTxtUI>+{notAppeared}개</MoreTxtUI>}
      </ProductListUI>
    </ListOfOrderUI>
  );
};

export default Order;

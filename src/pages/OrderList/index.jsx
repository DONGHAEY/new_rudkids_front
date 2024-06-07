import { useEffect, useState } from "react";
import Popup from "../../shared_components/Popup";
import useOrderListQuery from "../../queries/order/useOrderListQuery";
import {
  DateTxtUI,
  HeadUI,
  ListOfOrderUI,
  MoreTxtUI,
  OrderListUI,
  ProductImgUI,
  ProductImgWrapperUI,
  ProductListUI,
} from "./styles";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

const OrderListPage = () => {
  const navigate = useNavigate();

  const [cursorId, setCursorId] = useState(null);
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useOrderListQuery(cursorId);

  const maxProductsLength = 3;
  const notAppeared = data?.data?.length - maxProductsLength;

  const goDetail = (orderId) => {
    navigate(`/order/${orderId}`);
  };
  //   https://oliveyoung.tech/blog/2023-10-04/useInfiniteQuery-scroll/

  useEffect(() => {
    if (!data) return;
    setCursorId(data?.meta?.cursorId);
  }, [data]);

  return (
    <Popup title="주문내역" backgroundColor="#f3f3f3">
      <OrderListUI>
        {data?.map((order) => {
          return (
            <ListOfOrderUI
              onClick={() => {
                goDetail(order.id);
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
        })}
        <button
          style={{
            width: "100%",
            padding: "10px",
          }}
          onClick={fetchNextPage}
        >
          다음페이지
        </button>
      </OrderListUI>
    </Popup>
  );
};

export default OrderListPage;

import { useEffect, useState } from "react";
import Popup from "../../shared_components/Popup";
import useOrderListQuery from "../../queries/order/useOrderListQuery";
import { NextBtnUI, OrderListUI } from "./styles";
import GoToShop from "./GoToShop";
import Order from "./Order";

const OrderListPage = () => {
  const [cursorId, setCursorId] = useState(null);
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useOrderListQuery(cursorId);

  //   https://oliveyoung.tech/blog/2023-10-04/useInfiniteQuery-scroll/

  useEffect(() => {
    if (!data) return;
    setCursorId(data?.meta?.cursorId);
  }, [data]);

  return (
    <Popup title="주문내역" backgroundColor="#f3f3f3">
      <OrderListUI>
        {data?.length <= 0 && <GoToShop />}
        {data?.map((order) => {
          return <Order order={order} />;
        })}
        {hasNextPage && <NextBtnUI onClick={fetchNextPage}>More</NextBtnUI>}
      </OrderListUI>
    </Popup>
  );
};

export default OrderListPage;

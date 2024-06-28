import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCreatePaymentMutation from "../../mutations/payment/useCreatePaymentMutation";
import useDeleteCartMutation from "../../mutations/cart/useDeleteCartMutation";
import useOrderDetailQuery from "../../queries/order/useOrderDetailQuery";
import Loader from "../../shared_components/Loader";
import { Revenue, track, revenue } from "@amplitude/analytics-browser";

const PayPage = () => {
  const navigate = useNavigate();

  const createPaymentMutation = useCreatePaymentMutation();
  const deleteCartMutation = useDeleteCartMutation();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const paymentKey = searchParams.get("paymentKey");
  const amount = searchParams.get("amount");
  //
  const { data: orderData } = useOrderDetailQuery(orderId);

  useEffect(() => {
    if (!orderId || !paymentKey || !amount) {
      alert("정상적인 접근이 아님");
      navigate("/", {
        replace: "/",
      });
    }
    (async () => {
      await createPaymentMutation.mutateAsync(
        {
          orderId,
          paymentKey,
          amount: Number(amount),
        },
        {
          onError: (e) => {
            navigate(`/pay-fail${window.location.search}`);
            alert(e?.response?.data?.message ?? "결제에 실패했습니다");
          },
          onSuccess: () => {
            track("completed purchase", {
              order_id: orderId,
              total_price: amount,
              count: orderData?.orderProducts?.length,
              products: orderData?.orderProducts?.map((orderProduct) => {
                const options = {};
                orderProduct.options?.map((option) => {
                  options[option.groupName] = option.name;
                });
                const revenueEvent = new Revenue()
                  .setProductId(orderProduct.productId)
                  .setPrice(orderProduct.price)
                  .setQuantity(orderProduct.quantity)
                  .setRevenueType("purchase")
                  .setEventProperties({
                    ...options,
                  });
                revenue(revenueEvent);
                return {
                  product_id: orderProduct.productId,
                  product_name: orderProduct.name,
                  price: orderProduct.price,
                  quantity: orderProduct.quantity,
                  ...options,
                };
              }),
            });
            navigate(`/order/${orderId}`, {
              replace: true,
            });
          },
        }
      );
    })();
  }, [orderId, paymentKey, amount]);

  if (createPaymentMutation.isLoading || !orderData) {
    return <Loader />;
  }

  return null;
};

export default PayPage;

import { useParams } from "react-router-dom";

const OrderDetailPage = ({ routerInfo }) => {
  //
  const params = useParams();
  const orderId = params[routerInfo.paramKeys[0]];

  return (
    <div>
      <p>{orderId}</p>
    </div>
  );
};

export default OrderDetailPage;

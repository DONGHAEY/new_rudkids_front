import MainPage from "./pages/Main";
import ProductDetailPage from "./pages/ProductDetail";
import LoginCallback from "./pages/LoginCallback";
import CartPage from "./pages/Cart";
import CreateOrder from "./pages/CreateOrder";
import OrderDetailPage from "./pages/OrderDetail";
import PaySuccess from "./pages/PaySuccess";
import AuthHoc from "./shared_components/HOC/AuthHoc";

export const routes = {
  ["main"]: {
    path: "",
    paramKeys: [],
    element: AuthHoc(MainPage),
  },
  ["productDetail"]: {
    path: "product/:product_name",
    paramKeys: ["product_name"],
    element: AuthHoc(ProductDetailPage),
  },
  ["cart"]: {
    path: "cart",
    paramKeys: [],
    element: AuthHoc(CartPage),
  },
  ["createOrder"]: {
    path: "create-order",
    paramKeys: [],
    element: AuthHoc(CreateOrder),
  },
  ["orderDetail"]: {
    path: "/order/:order_id",
    paramKeys: ["order_id"],
    element: AuthHoc(OrderDetailPage),
  },
  ["paySuccess"]: {
    path: "/pay-success",
    paramKeys: [],
    element: PaySuccess,
  },
  ["loginCallback"]: {
    path: "callback",
    paramKeys: [],
    element: LoginCallback,
  },
};

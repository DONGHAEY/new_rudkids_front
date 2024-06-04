import MainPage from "./pages/Main";
import ProductDetailPage from "./pages/ProductDetail";
import LoginCallbackPage from "./pages/LoginCallback";
import CartPage from "./pages/Cart";
import CreateOrder from "./pages/CreateOrder";
import OrderDetailPage from "./pages/OrderDetail";
import Pay from "./pages/Pay";
import AuthHoc from "./shared_components/HOC/AuthHoc";
import LoginPage from "./pages/Login";
import InstaInfoPage from "./pages/InstaInfo";
import InvitePage from "./pages/Invite";
import InvitationPage from "./pages/Invitation";
import ProfilePage from "./pages/Profile";
import ProfileEditPage from "./pages/ProfileEdit";
import CreateRudcardPage from "./pages/CreateRudcard";
import RankPage from "./pages/Rank";
import _401Page from "./pages/401";

export const routes = {
  ["404"]: {
    path: "401",
    paramKeys: [],
    element: _401Page,
  },
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
  ["pay"]: {
    path: "/pay",
    paramKeys: [],
    element: Pay,
  },
  ["login"]: {
    path: "login",
    paramKeys: [],
    element: LoginPage,
  },
  ["loginCallback"]: {
    path: "login-callback/:platform",
    paramKeys: ["platform"],
    element: LoginCallbackPage,
  },
  ["instaInfo"]: {
    path: "/insta-info",
    paramKeys: [],
    element: InstaInfoPage,
  },
  ["invite"]: {
    path: "/invite",
    paramKeys: [],
    element: AuthHoc(InvitePage),
  },
  ["invitation"]: {
    path: "/invitation/:invitation_id",
    paramKeys: ["invitation_id"],
    element: InvitationPage,
  },
  ["my-profile"]: {
    path: "/profile",
    paramKeys: [],
    element: AuthHoc(ProfilePage),
  },
  ["profile"]: {
    path: "/profile/:user_id",
    paramKeys: ["user_id"],
    element: ProfilePage,
  },
  ["createRudcard"]: {
    path: "/create-rudcard",
    paramKeys: [],
    element: AuthHoc(CreateRudcardPage),
  },
  ["profile_edit"]: {
    path: "/profile/edit",
    paramKeys: ["nickname"],
    element: ProfileEditPage,
  },
  ["rank"]: {
    path: "/rank",
    paramKeys: [],
    element: AuthHoc(RankPage),
  },
};

import MainPage from "./pages/Main";
import ProductDetailPage from "./pages/ProductDetail";
import LoginCallbackPage from "./pages/LoginCallback";
import CartPage from "./pages/Cart";
import CreateOrder from "./pages/CreateOrder";
import OrderDetailPage from "./pages/OrderDetail";
import PayPage from "./pages/Pay";
import AuthHoc from "./shared_components/HOC/AuthHoc";
import LoginPage from "./pages/Login";
import InstaInfoPage from "./pages/InstaInfo";
import FirstInvitePage from "./pages/FirstInvite";
import InvitationPage from "./pages/Invitation";
import ProfilePage from "./pages/Profile";
import ProfileEditPage from "./pages/ProfileEdit";
import CreateRudcardPage from "./pages/CreateRudcard";
import RankPage from "./pages/Rank";
import RudGatePage from "./pages/RudGate";
import _401Page from "./pages/401";
import LeagalPage from "./pages/Legal";
import OrderListPage from "./pages/OrderList";
import CollectionPage from "./pages/Collection";
import PayFailPage from "./pages/PayFail";

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
  ["orderList"]: {
    path: "/order-list",
    paramKeys: [],
    element: AuthHoc(OrderListPage),
  },
  ["collection"]: {
    path: "/collection",
    paramKey: [],
    element: AuthHoc(CollectionPage),
  },
  ["collectionOther"]: {
    path: "/collection/:user_id",
    paramKey: ["user_id"],
    element: CollectionPage,
  },
  ["orderDetail"]: {
    path: "/order/:order_id",
    paramKeys: ["order_id"],
    element: AuthHoc(OrderDetailPage),
  },
  ["pay"]: {
    path: "/pay",
    paramKeys: [],
    element: PayPage,
  },
  ["payFail"]: {
    path: "pay-fail",
    paramKey: [],
    element: PayFailPage,
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
    element: AuthHoc(InstaInfoPage),
  },
  ["firstInvite"]: {
    path: "/first-invite",
    paramKeys: [],
    element: AuthHoc(FirstInvitePage),
  },
  ["invitation"]: {
    path: "/invitation/:invitation_id",
    paramKeys: ["invitation_id"],
    element: InvitationPage,
  },
  ["profile"]: {
    path: "/profile",
    paramKeys: [],
    element: AuthHoc(ProfilePage),
  },
  ["profileOther"]: {
    path: "/profile/:user_id",
    paramKeys: ["user_id"],
    element: ProfilePage,
  },
  ["rudGate"]: {
    path: "/rud-gate",
    paramKeys: [],
    element: RudGatePage,
  },
  ["createRudcard"]: {
    path: "/create-rudcard",
    paramKeys: [],
    element: AuthHoc(CreateRudcardPage),
  },
  ["profile_edit"]: {
    path: "/profile/edit",
    paramKeys: ["nickname"],
    element: AuthHoc(ProfileEditPage),
  },
  ["rank"]: {
    path: "/rank",
    paramKeys: [],
    element: AuthHoc(RankPage),
  },
  ["legal"]: {
    path: "/legal",
    paramKeys: [],
    element: LeagalPage,
  },
};

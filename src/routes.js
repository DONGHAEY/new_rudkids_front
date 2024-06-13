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
import TicketPage from "./pages/Ticket";
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
import LandingPage from "./pages/Landing";

export const routes = {
  ["404"]: {
    name: "401",
    viewTrack: true,
    path: "401",
    paramKeys: [],
    element: _401Page,
  },
  ["landing"]: {
    name: "landing",
    viewTrack: true,
    path: "",
    paramKeys: [],
    element: LandingPage,
  },
  ["shop"]: {
    name: "shop",
    viewTrack: true,
    path: "/shop",
    paramKeys: [],
    element: AuthHoc(MainPage),
  },
  ["productDetail"]: {
    name: "product-detail",
    viewTrack: false,
    path: "product/:product_name",
    paramKeys: ["product_name"],
    element: AuthHoc(ProductDetailPage),
  },
  ["cart"]: {
    name: "cart",
    viewTrack: true,
    path: "cart",
    paramKeys: [],
    element: AuthHoc(CartPage),
  },
  ["createOrder"]: {
    name: "create-order",
    viewTrack: true,
    path: "create-order",
    paramKeys: [],
    element: AuthHoc(CreateOrder),
  },
  ["orderList"]: {
    name: "order-list",
    viewTrack: true,
    path: "/order-list",
    paramKeys: [],
    element: AuthHoc(OrderListPage),
  },
  ["collection"]: {
    name: "collection",
    viewTrack: true,
    path: "/collection",
    paramKey: [],
    element: AuthHoc(CollectionPage),
  },
  ["collectionOther"]: {
    name: "collection-other",
    viewTrack: true,
    path: "/collection/:user_id",
    paramKey: ["user_id"],
    element: CollectionPage,
  },
  ["orderDetail"]: {
    name: "order-detail",
    viewTrack: true,
    path: "/order/:order_id",
    paramKeys: ["order_id"],
    element: AuthHoc(OrderDetailPage),
  },
  ["pay"]: {
    name: "pay",
    viewTrack: false,
    path: "/pay",
    paramKeys: [],
    element: PayPage,
  },
  ["payFail"]: {
    name: "pay-fail",
    viewTrack: true,
    path: "pay-fail",
    paramKey: [],
    element: PayFailPage,
  },
  ["login"]: {
    name: "login",
    viewTrack: true,
    path: "login",
    paramKeys: [],
    element: LoginPage,
  },
  ["loginCallback"]: {
    name: "login-callback",
    viewTrack: false,
    path: "login-callback/:platform",
    paramKeys: ["platform"],
    element: LoginCallbackPage,
  },
  ["instaInfo"]: {
    name: "insta-info",
    viewTrack: true,
    path: "/insta-info",
    paramKeys: [],
    element: AuthHoc(InstaInfoPage),
  },
  ["firstInvite"]: {
    name: "first-invite",
    viewTrack: true,
    path: "/first-invite",
    paramKeys: [],
    element: AuthHoc(FirstInvitePage),
  },
  ["ticket"]: {
    name: "ticket",
    viewTrack: false,
    path: "/ticket/:ticket_id",
    paramKeys: ["ticket_id"],
    element: TicketPage,
  },
  ["profile"]: {
    name: "profile",
    viewTrack: true,
    path: "/profile",
    paramKeys: [],
    element: AuthHoc(ProfilePage),
  },
  ["profileOther"]: {
    name: "profile-other",
    viewTrack: true,
    path: "/profile/:user_id",
    paramKeys: ["user_id"],
    element: ProfilePage,
  },
  ["rudGate"]: {
    name: "rud-gate",
    viewTrack: true,
    path: "/rud-gate",
    paramKeys: [],
    element: RudGatePage,
  },
  ["createRudcard"]: {
    name: "create-rudcard",
    viewTrack: true,
    path: "/create-rudcard",
    paramKeys: [],
    element: AuthHoc(CreateRudcardPage),
  },
  ["profileEdit"]: {
    name: "profile-edit",
    viewTrack: true,
    path: "/profile/edit",
    paramKeys: ["nickname"],
    element: AuthHoc(ProfileEditPage),
  },
  ["rank"]: {
    name: "rank",
    viewTrack: true,
    path: "/rank",
    paramKeys: [],
    element: AuthHoc(RankPage),
  },
  ["legal"]: {
    name: "legal",
    viewTrack: false,
    path: "/legal",
    paramKeys: [],
    element: LeagalPage,
  },
};

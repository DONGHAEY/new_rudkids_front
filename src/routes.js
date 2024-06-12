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
    pageMeta: {
      name: "401",
    },
    path: "401",
    paramKeys: [],
    element: _401Page,
  },
  ["landing"]: {
    pageMeta: {
      name: "landing",
    },
    path: "",
    paramKeys: [],
    element: LandingPage,
  },
  ["shop"]: {
    pageMeta: {
      name: "shop",
    },
    path: "/shop",
    paramKeys: [],
    element: AuthHoc(MainPage),
  },
  ["productDetail"]: {
    pageMeta: {
      name: "product-detail",
    },
    path: "product/:product_name",
    paramKeys: ["product_name"],
    element: AuthHoc(ProductDetailPage),
  },
  ["cart"]: {
    pageMeta: {
      name: "cart",
    },
    path: "cart",
    paramKeys: [],
    element: AuthHoc(CartPage),
  },
  ["createOrder"]: {
    pageMeta: {
      name: "create-order",
    },
    path: "create-order",
    paramKeys: [],
    element: AuthHoc(CreateOrder),
  },
  ["orderList"]: {
    pageMeta: {
      name: "order-list",
    },
    path: "/order-list",
    paramKeys: [],
    element: AuthHoc(OrderListPage),
  },
  ["collection"]: {
    pageMeta: {
      name: "collection",
    },
    path: "/collection",
    paramKey: [],
    element: AuthHoc(CollectionPage),
  },
  ["collectionOther"]: {
    pageMeta: {
      name: "collection-other",
    },
    path: "/collection/:user_id",
    paramKey: ["user_id"],
    element: CollectionPage,
  },
  ["orderDetail"]: {
    pageMeta: {
      name: "order-detail",
    },
    path: "/order/:order_id",
    paramKeys: ["order_id"],
    element: AuthHoc(OrderDetailPage),
  },
  ["pay"]: {
    pageMeta: {
      name: "pay",
    },
    path: "/pay",
    paramKeys: [],
    element: PayPage,
  },
  ["payFail"]: {
    pageMeta: {
      name: "pay-fail",
    },
    path: "pay-fail",
    paramKey: [],
    element: PayFailPage,
  },
  ["login"]: {
    pageMeta: {
      name: "login",
    },
    path: "login",
    paramKeys: [],
    element: LoginPage,
  },
  ["loginCallback"]: {
    pageMeta: {
      name: "login-callback",
    },
    path: "login-callback/:platform",
    paramKeys: ["platform"],
    element: LoginCallbackPage,
  },
  ["instaInfo"]: {
    pageMeta: {
      name: "insta-info",
    },
    path: "/insta-info",
    paramKeys: [],
    element: AuthHoc(InstaInfoPage),
  },
  ["firstInvite"]: {
    pageMeta: {
      name: "first-invite",
    },
    path: "/first-invite",
    paramKeys: [],
    element: AuthHoc(FirstInvitePage),
  },
  ["ticket"]: {
    pageMeta: {
      name: "ticket",
    },
    path: "/ticket/:ticket_id",
    paramKeys: ["ticket_id"],
    element: TicketPage,
  },
  ["profile"]: {
    pageMeta: {
      name: "profile",
    },
    path: "/profile",
    paramKeys: [],
    element: AuthHoc(ProfilePage),
  },
  ["profileOther"]: {
    pageMeta: {
      name: "profile-other",
    },
    path: "/profile/:user_id",
    paramKeys: ["user_id"],
    element: ProfilePage,
  },
  ["rudGate"]: {
    pageMeta: {
      name: "rud-gate",
    },
    path: "/rud-gate",
    paramKeys: [],
    element: RudGatePage,
  },
  ["createRudcard"]: {
    pageMeta: {
      name: "create-rudcard",
    },
    path: "/create-rudcard",
    paramKeys: [],
    element: AuthHoc(CreateRudcardPage),
  },
  ["profileEdit"]: {
    pageMeta: {
      name: "profile-edit",
    },
    path: "/profile/edit",
    paramKeys: ["nickname"],
    element: AuthHoc(ProfileEditPage),
  },
  ["rank"]: {
    pageMeta: {
      name: "rank",
    },
    path: "/rank",
    paramKeys: [],
    element: AuthHoc(RankPage),
  },
  ["legal"]: {
    pageMeta: {
      name: "legal",
    },
    path: "/legal",
    paramKeys: [],
    element: LeagalPage,
  },
};

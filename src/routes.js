import React, { lazy } from "react";
import SymbolLoader from "./shared_components/SymbolLoader";
import AuthHoc from "./shared_components/HOC/AuthHoc";
const ShopPage = lazy(() => import("./pages/Shop"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetail"));
const LoginCallbackPage = lazy(() => import("./pages/LoginCallback"));
const CartPage = lazy(() => import("./pages/Cart"));
const CreateOrder = lazy(() => import("./pages/CreateOrder"));
const OrderDetailPage = lazy(() => import("./pages/OrderDetail"));
const PayPage = lazy(() => import("./pages/Pay"));
const LoginPage = lazy(() => import("./pages/Login"));
const InstaInfoPage = lazy(() => import("./pages/InstaInfo"));
const FirstInvitePage = lazy(() => import("./pages/Invite"));
const TicketPage = lazy(() => import("./pages/Ticket"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const ProfileEditPage = lazy(() => import("./pages/ProfileEdit"));
const CreateRudcardPage = lazy(() => import("./pages/CreateRudcard"));
const RankPage = lazy(() => import("./pages/Rank"));
const _401Page = lazy(() => import("./pages/401"));
const LegalPage = lazy(() => import("./pages/Legal"));
const OrderListPage = lazy(() => import("./pages/OrderList"));
const CollectionPage = lazy(() => import("./pages/Collection"));
const PayFailPage = lazy(() => import("./pages/PayFail"));
const HomePage = lazy(() => import("./pages/Home"));
const LandingPage = lazy(() => import("./pages/Landing"));
const TempPage = lazy(() => import("./pages/Temp"));

export const routes = {
  ["temp"]: {
    name: "temp",
    viewTrack: false,
    path: "temp",
    paramKeys: [],
    element: TempPage,
  },
  ["landing"]: {
    name: "landing",
    viewTrack: true,
    path: "/",
    paramKeys: [],
    element: LandingPage,
  },
  ["404"]: {
    name: "401",
    viewTrack: true,
    path: "401",
    paramKeys: [],
    element: _401Page,
  },
  ["home"]: {
    name: "home",
    viewTrack: true,
    path: "/home",
    paramKeys: [],
    element: AuthHoc(HomePage),
    fallback: <SymbolLoader loading={true} />,
  },
  ["shop"]: {
    name: "shop",
    viewTrack: true,
    path: "/shop",
    paramKeys: [],
    element: AuthHoc(ShopPage),
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
    element: InstaInfoPage,
  },
  ["invite"]: {
    name: "invite",
    viewTrack: true,
    path: "/invite",
    paramKeys: [],
    element: FirstInvitePage,
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
    element: LegalPage,
  },
};

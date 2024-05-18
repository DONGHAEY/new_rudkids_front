import VideoPage from "./pages/Video";
import ProductPage from "./pages/Product";
import List3dPage from "./pages/List3D";
import RudCameraPage from "./pages/RudCamera";
import LoginCallback from "./pages/LoginCallback";
import InvitationPage from "./pages/Invitation";
import SchoolInvitationPage from "./pages/SchoolInvitation";
import StoryPage from "./pages/Story";
import CartPage from "./pages/Cart";
import CreateOrder from "./pages/CreateOrder";
import OrderDetailPage from "./pages/OrderDetail";
import PaySuccess from "./pages/PaySuccess";
import AuthHoc from "./shared/HOC/AuthHoc";
import ProfilePage from "./pages/Profile ";
import Story2Page from "./pages/Story-2";
import RudGatePage from "./pages/RudGate";
import AboutPage from "./pages/About";
import MainPage from "./pages/Main";
import MainV2Page from "./pages/Main_v2";
import MainV3Page from "./pages/Main_v3";

export const routes = {
  ["about"]: {
    path: "about",
    paramKeys: [],
    element: AboutPage,
  },
  ["main"]: {
    path: "",
    paramKeys: [],
    element: MainV3Page,
  },
  ["main2"]: {
    path: "2",
    paramKeys: [],
    element: MainV2Page,
  },
  ["main3"]: {
    path: "3",
    paramKeys: [],
    element: MainPage,
  },
  ["profile"]: {
    path: "profile",
    paramKeys: [],
    element: AuthHoc(ProfilePage),
  },
  ["other_profile"]: {
    path: "/profile/:profile_name",
    paramKeys: ["profile_name"],
    element: ProfilePage,
  },
  ["profile/:id"]: {
    path: "profile/:profile_id",
    paramKeys: ["profile_id"],
    element: AuthHoc(ProfilePage),
  },
  ["list3d"]: {
    path: "list-3d",
    paramKeys: [],
    element: AuthHoc(List3dPage),
  },
  ["product"]: {
    path: "product/:product_name",
    paramKeys: ["product_name"],
    element: AuthHoc(ProductPage),
  },
  ["story"]: {
    path: "product/:product_name/story",
    paramKeys: ["product_name"],
    element: AuthHoc(StoryPage),
  },
  ["story2"]: {
    path: "product/:product_name/story-2",
    paramKeys: ["product_name"],
    element: Story2Page,
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
  ["rudCamera"]: {
    path: "rud-camera",
    paramKeys: [],
    element: AuthHoc(RudCameraPage),
  },
  ["paySuccess"]: {
    path: "/pay-success",
    paramKeys: [],
    element: PaySuccess,
  },
  ["invitation"]: {
    path: "invitation/:user_id",
    paramKeys: ["user_id"],
    element: InvitationPage,
  },
  ["schoolInvitation"]: {
    path: "school-invitation/:school_name",
    paramKeys: ["school_name"],
    element: SchoolInvitationPage,
  },
  ["rudGate"]: {
    path: "rud-gate",
    paramKeys: [],
    element: AuthHoc(RudGatePage),
  },
  ["loginCallback"]: {
    path: "callback",
    paramKeys: [],
    element: LoginCallback,
  },
  ["viedeo"]: {
    path: "/video",
    paramKeys: [],
    element: VideoPage,
  },
};

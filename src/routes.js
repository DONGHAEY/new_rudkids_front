import VideoPage from "./pages/Video";
import MainPage from "./pages/Main";
import ProductPage from "./pages/Product";
import List3dPage from "./pages/List3D";
import RudCameraPage from "./pages/RudCamera";
import LoginCallback from "./pages/LoginCallback";
import InvitationPage from "./pages/Invitation";
import SchoolInvitationPage from "./pages/SchoolInvitation";
import StoryPage from "./pages/Story";
import CartPage from "./pages/Cart";
import OrderPage from "./pages/Order";
import OrderDetailPage from "./pages/OrderDetail";
import PaySuccess from "./pages/PaySuccess";
import AuthHoc from "./shared/HOC/AuthHoc";
import ProfilePage from "./pages/Profile ";

export const routes = {
  ["main"]: {
    path: "",
    paramKeys: [],
    element: AuthHoc(MainPage),
  },
  ["profile"]: {
    path: "profile",
    paramKeys: [],
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
  ["cart"]: {
    path: "cart",
    paramKeys: [],
    element: AuthHoc(CartPage),
  },
  ["order"]: {
    path: "order",
    paramKeys: [],
    element: AuthHoc(OrderPage),
  },
  ["orderDetail"]: {
    path: "/order/:order_id",
    paramKeys: ["order_id"],
    element: AuthHoc(OrderDetailPage),
  },
  ["paySuccess"]: {
    path: "/paySuccess",
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
  ["rud-camera"]: {
    path: "rud-camera",
    paramKeys: [],
    element: RudCameraPage,
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

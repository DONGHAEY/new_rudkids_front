import VideoPage from "./pages/Video";
import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";
import List3dPage from "./pages/List3D";
import HandPage from "./pages/Hand";
import CallbackPage from "./pages/Callback";
import InvitationPage from "./pages/Invitation";
import SchoolInvitationPage from "./pages/SchoolInvitation";
import StoryPage from "./pages/Story";
import CartPage from "./pages/Cart";
import OrderPage from "./pages/Order";
import OrderDetailPage from "./pages/OrderDetail";
import PaySuccess from "./pages/PaySuccess";

export const routes = {
  ["main"]: {
    path: "",
    paramKeys: [],
    element: MainPage,
  },
  ["viedeo"]: {
    path: "/video",
    paramKeys: [],
    element: VideoPage,
  },
  ["list3d"]: {
    path: "list-3d",
    paramKeys: [],
    element: List3dPage,
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
  ["product"]: {
    path: "product/:product_name",
    paramKeys: ["product_name"],
    element: DetailPage,
  },
  ["story"]: {
    path: "product/:product_name/story",
    paramKeys: ["product_name"],
    element: StoryPage,
  },
  ["cart"]: {
    path: "cart",
    paramKeys: [],
    element: CartPage,
  },
  ["order"]: {
    path: "order",
    paramKeys: [],
    element: OrderPage,
  },
  ["paySuccess"]: {
    path: "/paySuccess",
    paramKeys: [],
    element: PaySuccess,
  },
  ["orderDetail"]: {
    path: "/order/:order_id",
    paramKeys: ["order_id"],
    element: OrderDetailPage,
  },
  ["hand"]: {
    path: "hand",
    paramKeys: [],
    element: HandPage,
  },
  ["callbackPage"]: {
    path: "callback",
    paramKeys: [],
    element: CallbackPage,
  },
};

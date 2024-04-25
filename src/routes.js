import MainPage from "./pages/Main";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import List3dPage from "./pages/List3D";
import HandPage from "./pages/Hand";
import CallbackPage from "./pages/Callback";
import InvitationPage from "./pages/Invitation";
import SchoolInvitationPage from "./pages/SchoolInvitation";
import PerformancePage from "./pages/Performance";
import CartPage from "./pages/Cart";

export const routes = {
  ["main"]: {
    path: "",
    paramKeys: [],
    element: MainPage,
  },
  ["list"]: {
    path: "list",
    paramKeys: [],
    element: ListPage,
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
  ["detail"]: {
    path: "detail/:product_name",
    paramKeys: ["product_name"],
    element: DetailPage,
  },
  ["performance"]: {
    path: "performance/:product_name",
    paramKeys: ["product_name"],
    element: PerformancePage,
  },
  ["cart"]: {
    path: "cart",
    paramKeys: [],
    element: CartPage,
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

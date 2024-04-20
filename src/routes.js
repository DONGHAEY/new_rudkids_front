import MainPage from "./pages/Main";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import List3dPage from "./pages/List3D";
import HandPage from "./pages/Hand";
import CallbackPage from "./pages/Callback";
import InvitationPage from "./pages/Invitation";
import SchoolInvitationPage from "./pages/SchoolInvitation";

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
    path: "detail/:id",
    paramKeys: ["id"],
    element: DetailPage,
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

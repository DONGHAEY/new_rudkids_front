import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import MainPage from "./pages/Main";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import List3dPage from "./pages/List3D";
import HandPage from "./pages/Hand";
import CallbackPage from "./pages/Callback";
import InvitationPage from "./pages/Invitation";
import SchoolInvitationPage from "./pages/SchoolInvitation";

function App() {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list-3d" element={<List3dPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/invitation/:user_id" element={<InvitationPage />} />
          <Route
            path="/school-invitation/:school_name"
            element={<SchoolInvitationPage />}
          />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/hand" element={<HandPage />} />
          <Route path="/callback" element={<CallbackPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

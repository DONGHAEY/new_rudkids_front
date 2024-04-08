import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { PcBlocking } from "./components/PcBlocking";
// import { Share } from "./components/Share";
// import Lottie from "lottie-web";
import MainPage from "./pages/Main";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";
import List3dPage from "./pages/List3D";
import HandPage from "./pages/Hand";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list-3d" element={<List3dPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/hand" element={<HandPage />} />
      </Routes>
      {/* <PcBlocking /> */}
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./components/Pages/List";
import { HandMotion } from "./components/Pages/HandMotion";
import { Login } from "./components/Pages/Login";
import { Detail } from "./components/Pages/Detail";
import { My } from "./components/Pages/My";
import { Main } from "./components/Pages/Main";
import { Order } from "./components/Pages/Order";
//
import { PcBlocking } from "./components/PcBlocking";
import { Share } from "./components/Share";
//

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hand-motion" element={<HandMotion />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<List />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/my" element={<My />} />
          <Route path="/order/:id" element={<Order />} />
          {/*  */}
          <Route path="/policy-privacy" element={null} />
        </Routes>
        {/* <Share />
        <PcBlocking /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

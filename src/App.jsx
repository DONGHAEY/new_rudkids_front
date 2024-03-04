import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./components/Page/List/index";
import { HandMotion } from "./components/Page/HandMotion/index";
import { Login } from "./components/Page/Login/index";
import { PcBlocking } from "./components/PcBlocking";
import { Detail } from "./components/Page/Detail/index";
import { Share } from "./components/Page/Share";
import { My } from "./components/Page/My";
import { Order } from "./components/Page/Order";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} /> /** 영상페이지(건너뛰기) */
          <Route path="/hand-motion" element={<HandMotion />} /> /**
          AI동작인식페이지(카메라, 사진찍기, 필터변경, 인스타그램 스토리 공유 or
          사진 download) */
          <Route path="/login" element={<Login />} /> /**
          로그인페이지(구글,인스타그램) */
          <Route path="/list" element={<List />} /> /**
          아이템리스트페이지(아이템GLB파일*애니메이션 포함) */
          <Route path="/detail/:id" element={<Detail />} /> /**
          아이템디테일페이지(아이템GLB파일 *3D키프레임재생, 구매버튼, 토스위젯)
          */
          <Route path="/my" element={<My />} /> /** 내정보(주문했던것들 리스트)
          */
          <Route path="/order/:id" element={<Order />} /> /** 주문현황 3D 모습
          */
          {/*  */}
          <Route path="/policy-privacy" element={null} />
        </Routes>
      </BrowserRouter>
      <Share />
      <PcBlocking />
    </>
  );
}

export default App;

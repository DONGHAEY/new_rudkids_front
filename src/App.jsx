import { List } from "./components/List/index";
import { useKakaoScript } from "react-kakao-share";
import { Share } from "./components/Share";

function App() {
  useKakaoScript();
  return (
    <>
      <List />
      <Share />
    </>
  );
}

export default App;

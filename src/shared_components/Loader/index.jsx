import { useEffect, useRef, useState } from "react";
import { LoaderUI } from "./styles";
import PublicBizAssets from "../../global/public-biz-assets";

const Loader = ({ message, color, position = "fixed" }) => {
  const ref = useRef();
  const [loadSec, setLoadSec] = useState(0);

  const loadImgs = [PublicBizAssets.load1, PublicBizAssets.load2];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadSec(loadSec + 1);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [loadSec]);

  return (
    <LoaderUI position={position}>
      <img ref={ref} src={loadImgs[loadSec % loadImgs.length]} height="150px" />
      {message && <p>{message}</p>}
    </LoaderUI>
  );
};

export default Loader;

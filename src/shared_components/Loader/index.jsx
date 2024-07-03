import { useTrackLoadingTime } from "../../shared_analytics";
import EatingKid from "./EatingKid";
import { LoaderUI } from "./styles";

const Loader = ({ position = "fixed", pageName = "?" }) => {
  useTrackLoadingTime(pageName, "normal");

  return (
    <LoaderUI position={position}>
      <EatingKid />
    </LoaderUI>
  );
};

export default Loader;

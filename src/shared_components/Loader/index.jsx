import EatingKid from "./EatingKid";
import { LoaderUI } from "./styles";

const Loader = ({ position = "fixed" }) => {
  return (
    <LoaderUI position={position}>
      <EatingKid />
    </LoaderUI>
  );
};

export default Loader;

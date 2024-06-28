import { FaMinus, FaPlus } from "react-icons/fa6";
import { QuantityControllerUI } from "./styles";

const QuantityController = ({ quantity = 1, setQuantity }) => {
  return (
    <QuantityControllerUI>
      <FaMinus
        onClick={() => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)}
      />
      <p>{quantity}</p>
      <FaPlus onClick={() => setQuantity(quantity + 1)} />
    </QuantityControllerUI>
  );
};

export default QuantityController;

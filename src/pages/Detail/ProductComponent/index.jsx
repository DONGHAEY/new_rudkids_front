import { ProductComponentImgUI, ProductComponentWrapperUI } from "./styles";

const ProductComponent = ({ imageUrl, selected, onClick }) => {
  return (
    <ProductComponentWrapperUI onClick={onClick} $selected={selected}>
      <ProductComponentImgUI src={imageUrl} />
    </ProductComponentWrapperUI>
  );
};

export default ProductComponent;

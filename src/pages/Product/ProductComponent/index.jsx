import {
  NameTextUI,
  ProductComponentImgUI,
  ProductComponentImgWrapperUI,
  ProductComponentUI,
} from "./styles";

const ProductComponent = ({ imageUrl, name, selected, onClick }) => {
  return (
    <ProductComponentUI>
      <ProductComponentImgWrapperUI onClick={onClick} $selected={selected}>
        <ProductComponentImgUI src={imageUrl} />
      </ProductComponentImgWrapperUI>
      <NameTextUI>{name}</NameTextUI>
    </ProductComponentUI>
  );
};

export default ProductComponent;

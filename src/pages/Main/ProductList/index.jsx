import {
  ListUI,
  ProductBoxUI,
  ProductImgUI,
  ProductImgWrapperUI,
  ProductInfoWrapperUI,
  ProductNameTxtUI,
  ProductPriceTxtUI,
} from "./styles";

const ProductList = ({ productList }) => {
  return (
    <ListUI>
      {productList?.map(({ thumnail, name, price }) => {
        return (
          <ProductBoxUI to={`/product/${name}`} key={name}>
            <ProductImgWrapperUI>
              <ProductImgUI src={thumnail} />
            </ProductImgWrapperUI>
            <ProductInfoWrapperUI>
              <ProductNameTxtUI>{name}</ProductNameTxtUI>
              <ProductPriceTxtUI>{price}</ProductPriceTxtUI>
            </ProductInfoWrapperUI>
          </ProductBoxUI>
        );
      })}
    </ListUI>
  );
};

export default ProductList;

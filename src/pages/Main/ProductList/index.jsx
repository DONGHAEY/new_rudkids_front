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
  //
  // const { data: image, isLoading } = useQuery(
  //   ["product", "list", "image", thumnail],
  //   () => fetch(thumnail).then((res) => res.blob())
  // );

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

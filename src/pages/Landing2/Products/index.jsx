import {
  LimitedUI,
  ProductImgWrapperUI,
  ProductNmUI,
  ProductPriceUI,
  ProductTxtWrapperUI,
  ProductUI,
  ProductsUI,
} from "./styles";
const Products = ({ products, bgColor = "red", bdColor = "red" }) => {
  return (
    <ProductsUI className="hidden_scrollbar">
      {products?.map((product) => {
        return (
          <ProductUI>
            <ProductImgWrapperUI bgColor={bgColor} bdColor={bdColor}>
              <LimitedUI>
                LIMITED
                <br />
                EDITION
              </LimitedUI>
            </ProductImgWrapperUI>
            <ProductTxtWrapperUI>
              <ProductNmUI>{product.name}</ProductNmUI>
              <ProductPriceUI>{product.price}</ProductPriceUI>
            </ProductTxtWrapperUI>
          </ProductUI>
        );
      })}
    </ProductsUI>
  );
};

export default Products;

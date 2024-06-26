import { useNavigate } from "react-router-dom";
import {
  ListUI,
  ProductBoxUI,
  ProductImgUI,
  ProductImgWrapperUI,
  ProductInfoWrapperUI,
  ProductNameTxtUI,
  ProductPriceTxtUI,
} from "./styles";
import { useQueryClient } from "react-query";
import {
  getProductDetail,
  KEY as productQueryKey,
} from "../../../queries/product/useProductDetailQuery";
import RudImage from "../../../shared_components/RudImage";

const ProductList = ({ productList }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const productClickHandler = async (name) => {
    await queryClient
      .prefetchQuery({
        queryKey: productQueryKey(name),
        queryFn: async () => await getProductDetail(name),
      })
      .then(() => {
        navigate(`/product/${name}`);
      });
  };

  return (
    <ListUI>
      {productList?.map(({ thumnail, name, price }) => {
        return (
          <ProductBoxUI onClick={() => productClickHandler(name)} key={name}>
            <ProductImgWrapperUI>
              <RudImage ImgUI={ProductImgUI} src={thumnail} />
            </ProductImgWrapperUI>
            <ProductInfoWrapperUI>
              <ProductNameTxtUI>{name}</ProductNameTxtUI>
              <ProductPriceTxtUI>
                {price.toLocaleString("ko-KR")}
              </ProductPriceTxtUI>
            </ProductInfoWrapperUI>
          </ProductBoxUI>
        );
      })}
    </ListUI>
  );
};

export default ProductList;

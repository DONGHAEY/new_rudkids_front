import Header from "../../shared_components/Header";
import { PageUI } from "./styles";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import useProductListQuery from "../../queries/product/useProductListQuery";
import Footer from "../../shared_components/Footer";
import { useNavigate } from "react-router-dom";
import * as qs from "qs";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import Loader from "../../shared_components/Loader";

const ShopPage = () => {
  const navigate = useNavigate();
  const searchObj = qs.parse(window.location.search?.replace("?", ""));
  const { data, isLoading } = useProductListQuery(searchObj);

  useBodyBackground("#0027F1");

  const setSearchProperty = (key, value) => {
    const searchObj = qs.parse(window.location.search?.replace("?", "")) ?? {};
    if (key !== "page" && searchObj["page"]) {
      searchObj["page"] = 1;
    }
    searchObj[key] = value;
    navigate(`?${qs.stringify(searchObj)}`);
  };

  return (
    <>
      <Header />
      <PageUI>
        <CategoryList
          typeCategory={searchObj["category"]}
          setTypeCategory={(type) => setSearchProperty("category", type)}
        />
        <ProductList productList={data?.data} />
        {isLoading && <Loader color="white" />}
      </PageUI>
      <Footer />
    </>
  );
};

{
  /* <PaginationList
          meta={data?.meta}
          onChange={(page) => setSearchProperty("page", page)}
        /> */
}

export default ShopPage;

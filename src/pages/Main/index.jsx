import Header from "../../shared_components/Header";
import { PageUI, SectionUI } from "./styles";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import useProductListQuery from "../../queries/product/useProductListQuery";
import Footer from "../../shared_components/Footer";
import { useNavigate } from "react-router-dom";
import * as qs from "qs";
import { useBodyBackground } from "../../hooks/useBodyBackground";
import Loader from "../../shared_components/Loader";

const MainPage = () => {
  const navigate = useNavigate();
  const searchObj = qs.parse(window.location.search?.replace("?", ""));
  const { data, isLoading } = useProductListQuery(searchObj);

  useBodyBackground("#1a94d9");

  const setSearchProperty = (key, value) => {
    const searchObj = qs.parse(window.location.search?.replace("?", "")) ?? {};
    if (key !== "page" && searchObj["page"]) {
      searchObj["page"] = 1;
    }
    searchObj[key] = value;
    navigate(`?${qs.stringify(searchObj)}`);
  };

  return (
    <PageUI>
      <SectionUI>
        <Header isFixed={true} />
        <CategoryList
          typeCategory={searchObj["category"]}
          setTypeCategory={(type) => setSearchProperty("category", type)}
        />
        <ProductList productList={data?.data} />
      </SectionUI>
      <Footer />
      {isLoading && <Loader color="white" />}
    </PageUI>
  );
};

{
  /* <PaginationList
          meta={data?.meta}
          onChange={(page) => setSearchProperty("page", page)}
        /> */
}

export default MainPage;

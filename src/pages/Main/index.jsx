import Header from "../../shared_components/Header";
import { ListUI, PageUI } from "./styles";
import ProductBox from "./ProductBox";
import TypeList from "./TypeList";
import useProductListQuery from "../../queries/product/useProductListQuery";
import Loader from "../../shared_components/Loader";
import Footer from "../../shared_components/Footer";
import { useNavigate } from "react-router-dom";
import * as qs from "qs";
import PaginationList from "./PaginationList";

const MainPage = () => {
  const navigate = useNavigate();
  const searchObj = qs.parse(window.location.search?.replace("?", ""));
  const { data, isLoading } = useProductListQuery(searchObj);

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
      <PageUI>
        <Header isFixed={true} />
        <TypeList
          typeCategory={searchObj["type"]}
          setTypeCategory={(type) => setSearchProperty("type", type)}
        />
        <ListUI>
          {data?.data?.map((product) => {
            return (
              <ProductBox
                key={product?.name}
                price={product?.price}
                name={product?.name}
                thumnail={product?.thumnail}
              />
            );
          })}
        </ListUI>
        <PaginationList
          meta={data?.meta}
          onChange={(page) => setSearchProperty("page", page)}
        />
      </PageUI>
      {isLoading && <Loader delayMs={500} />}
      <Footer />
    </>
  );
};

export default MainPage;

import Header from "../../shared_components/Header";
import { ListUI, PageUI } from "./styles";
import ProductBox from "./ProductBox";
import { useState } from "react";
import TypeList from "./TypeList";
import useProductListQuery from "../../queries/product/useProductListQuery";
import Loader from "../../shared_components/Loader";
import Footer from "../../shared_components/Footer";

const MainPage = () => {
  //
  const [typeCategory, setTypeCategory] = useState("");

  const { data: productList, isLoading } = useProductListQuery({
    type: typeCategory === "All" ? null : typeCategory,
  });

  return (
    <>
      <PageUI>
        <Header isFixed={true} />
        <TypeList
          typeCategory={typeCategory}
          setTypeCategory={setTypeCategory}
        />
        <ListUI>
          {productList?.map((product) => {
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
      </PageUI>
      {isLoading && <Loader delayMs={500} />}
      <Footer />
    </>
  );
};

export default MainPage;

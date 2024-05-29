import Header from "../../shared_components/Header";
import { ListUI, PageUI, SearchSectionUI } from "./styles";
import tShirtSrc from "./assets/t-shirt.png";
import ProductBox from "./ProductBox";
import { useState } from "react";
import TypeList from "./TypeList";

const MainPage = () => {
  const [typeCategory, setTypeCategory] = useState("");

  return (
    <PageUI>
      <Header isFixed={false} />
      <TypeList typeCategory={typeCategory} setTypeCategory={setTypeCategory} />
      <ListUI>
        <ProductBox
          price={"129,000"}
          name={"Rudkids T-shirts"}
          thumnail={tShirtSrc}
        />
        <ProductBox
          price={"129,000"}
          name={"Rudkids T-shirts"}
          thumnail={tShirtSrc}
        />
        <ProductBox
          price={"129,000"}
          name={"Rudkids T-shirts"}
          thumnail={tShirtSrc}
        />
        <ProductBox
          price={"129,000"}
          name={"Rudkids T-shirts"}
          thumnail={tShirtSrc}
        />
        <ProductBox
          price={"129,000"}
          name={"Rudkids T-shirts"}
          thumnail={tShirtSrc}
        />
      </ListUI>
    </PageUI>
  );
};

export default MainPage;

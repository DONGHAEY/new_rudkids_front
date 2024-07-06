import TextScroll from "./TextScroll";
import Categories from "./Categories";
import Products from "./Products";

const Landing2Page = () => {
  //
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #0086FF 0%, #FFFFFF 100%)",
      }}
    >
      <div>
        <TextScroll />
        <Categories />
      </div>
      <Products
        bgColor="rgba(144, 234, 122, 1)"
        bdColor="rgba(0, 145, 71, 1)"
        products={[
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
        ]}
      />
      <Products
        bgColor="#F6FF5B"
        bdColor="#F6BC21"
        products={[
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
        ]}
      />
      <Products
        bgColor="#FFC3FD"
        bdColor="#0277DB"
        products={[
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
          {
            name: "productN",
            price: "139,000",
          },
        ]}
      />
    </div>
  );
};

export default Landing2Page;

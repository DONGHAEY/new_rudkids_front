const CartProduct = ({ cartProductData }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "120px",
        alignItems: "center",
        backgroundColor: "gainsboro",
        borderRadius: "20px",
      }}
    >
      <img height="100%" src={cartProductData.product.imageUrl} />
      <div>
        <p>{cartProductData.product.name}</p>
        <p>{cartProductData.product.price}원</p>
        <p>{cartProductData.quantity}개</p>
      </div>
    </div>
  );
};

export default CartProduct;

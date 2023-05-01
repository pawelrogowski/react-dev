export const ProductList = ({ productList }) => {
  const listItems = productList.map((product) => (
    <li style={{ color: "red" }} key={product.id}>
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
};

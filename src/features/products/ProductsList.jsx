import ProductCard from "../../ui/ProductCard";
import ProductsWrapper from "../../ui/ProductsWrapper";

export default function ProductsList() {
  const productsList = [];
  for (let i = 0; i < 15; i++) {
    productsList.push(<ProductCard key={i} />);
  }
  return <ProductsWrapper>{productsList}</ProductsWrapper>;
}

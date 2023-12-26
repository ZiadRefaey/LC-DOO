import PaginationPages from "../ui/PaginationPages";
import ProductsLayout from "../features/products/ProductsLayout";
import ProductsList from "../features/products/ProductsList";
import ProductsSideBar from "../ui/ProductsSideBar";

export default function Products() {
  return (
    <div>
      <div className="flex">
        <ProductsSideBar />
        <ProductsLayout>
          <ProductsList />
          <PaginationPages />
        </ProductsLayout>
      </div>
    </div>
  );
}

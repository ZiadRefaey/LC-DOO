import ProductsLayout from "../../features/products/ProductsLayout";
import ProductsList from "../../features/products/ProductsList";
import ProductsSideBar from "../../features/products/ProductsSideBar";
import Pagination from "../../ui/Pagination";

export default function Products() {
  return (
    <div>
      <div className="flex">
        <ProductsSideBar />
        <ProductsLayout>
          <ProductsList />
          <Pagination />
        </ProductsLayout>
      </div>
    </div>
  );
}

import ProductItem from "@/components/ProductItem";
import { data } from "@/data/data-js-local-photos";

export default function Home() {
  const { product } = data;
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg-grid-cols-4">
      {product.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

import ProductItem from "@/components/products/productItem";
import data from "@/lib/data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2 className="text-2xl py-2">Latest Product</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}

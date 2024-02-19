import ProductItem from "@/components/products/productItem";
import data from "@/lib/data";
import productService from "@/lib/services/productService";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "Ecommerce App",
  description: process.env.NEXT_PUBLIC_APP_NAME || "Ecommerce website ",
};

export default async function Home() {
  const featuredProducts = await productService.getFeatured();
  const Products = await productService.getLatest();

  return (
    <>
      <div className="w-full carousel rouded-box mt-4">
        {featuredProducts.map((product, index) => (
          <div
            key={product._id}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <Link href={`/product/${product.slug}`}>
              <img src={product.banner} className="w-full" alt={product.name} />
            </Link>
            <div className="absolute flex justify-between transform -transalate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide-${
                  index === 0 ? featuredProducts.length - 1 : index - 1
                }`}
                className="btn btn-circle  bg-cyan-400"
              >
                {"  < "}
              </a>
              <a
                href={`#slide-${
                  index === featuredProducts.length - 1 ? 0 : index + 1
                }`}
                className="btn btn-circle bg-cyan-400"
              >
                {" "}
                {">"}{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl py-2">Latest Product</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}

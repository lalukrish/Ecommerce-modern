import AddToCart from "@/components/products/addToCart";
import data from "@/lib/data";
import { conevertDocToObj } from "../../../../lib/utils";
import productService from "@/lib/services/productService";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = await productService.getBySlug(params.slug);
  if (!product) {
    return <div>product1</div>;
  }

  return (
    <>
      <div className="my-2">
        <Link href="/">back to product</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          ></Image>
        </div>
        <div>
          <ul className="space-y-4">
            <li className="text-xl">{product.name}</li>
            <li className="text-xl">{product.price}</li>
            <li className="text-xl">{product.brand}</li>
            <div className="divider"></div>
            <li className="text-xl">Description:{product.description}</li>
          </ul>
        </div>
        <div className="card bg-slate-900 shadow-xl">
          <div className="card-body">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>status</div>
              <div>{product.countInStock > 0 ? "In Stock" : "Unvailavle"} </div>
            </div>
            {product.countInStock !== 0 && (
              <div className="card-actions justify-center">
                <AddToCart
                  item={{
                    ...conevertDocToObj(product),
                    qty: 0,
                    color: "",
                    size: "",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

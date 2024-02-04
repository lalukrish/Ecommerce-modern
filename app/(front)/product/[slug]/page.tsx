import data from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const product = data.find((x) => {
    // console.log("x", x.slug);
    return x.slug === params.slug;
  });
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
            <div className="card-actions justify-center">
              <button className="btn btn-primary w-full">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

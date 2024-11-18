import Image from "next/image";
import Link from "next/link";
import ProductRate from "./ProductRate";
import AddToCart from "./AddToCart";

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-xl text-blue-700 font-bold mb-2 uppercase place-items-center">
            {product.name}{" "}
          </h2>
        </Link>
        <ProductRate
          rate={product.rating}
          count={product.numReviews}
          className="size-px"
        />
        <p className="mb-2 text-orange-600 text-lg items-center font-extrabold">
          {product.description}
        </p>
        <p className="text-3xl text-blue-700 font-bold">${product.price}</p>
        <AddToCart
          showQty={false}
          product={product}
          increasePerClick={true}
          redirect={false}
        />
      </div>
    </div>
  );
}
